"use client";
import { useState, useEffect, useRef, type MutableRefObject } from "react";
import { RadioGroup } from "@headlessui/react";
//
import Card from "@components/Card";
import { useStoreContext } from "@lib/StoreContext";
import { type HeadlessUI, type Book, type BooksResponse } from "@lib/Interface";

// Store
export default function Store(storeInitialData: BooksResponse): JSX.Element
{
  const [books, setBooks] = useState<Book[]>(storeInitialData.books);
  const [pages, setPages] = useState<number[]>(storeInitialData.pages);
  const [page, setPage] = useState<number>(storeInitialData.pages[0]);
  const { subject, price, sort } = useStoreContext();
  const isInitialMount1: MutableRefObject<boolean> = useRef<boolean>(true);
  const isInitialMount2: MutableRefObject<boolean> = useRef<boolean>(true);

  // Reset Page
  useEffect(() =>
  {
    if (isInitialMount1.current)
    {
      isInitialMount1.current = false;
    }
    else
    {
      getBooks(page);
    }
  }, [page, sort]);

  // Not Reset Page
  useEffect(() =>
  {
    if (isInitialMount2.current)
    {
      isInitialMount2.current = false;
    }
    else
    {
      setPage(pages[0]);
      getBooks(pages[0]);
    }
  }, [subject, price]);

  // Get Books
  async function getBooks(x: number): Promise<void>
  {
    const url: string = `/api/books?page=${ x }&subject=${ subject }&price=${ price }&sort=${ sort }`;

    const response: Response = await fetch(url,
      {
        mode: "same-origin",
        cache: "force-cache",
        method: "GET",
        headers:
        {
          "Content-Type": "application/json"
        },
      });
    const result: BooksResponse = await response.json();

    setBooks(result.books);
    setPages(result.pages);
  }

  // Book Mapper
  function bookMapper(book: Book): JSX.Element
  {
    return (
      <Card { ...book } key={ book.title } />
    );
  }

  // Pagination Mapper
  function paginationMapper(x: number): JSX.Element
  {
    return (
      <RadioGroup.Option value={ x } key={ x }>
        { ({ checked }: HeadlessUI) => (
          <h6 className={ ` w-10 h-10 mx-1 flex justify-center items-center rounded text-sm font-primary cursor-pointer scale ${ checked ? ` text-white bg-dark-primary` : ` hover:text-white bg-light-grey hover:bg-primary` }` }>
            { x }
          </h6>
        ) }
      </RadioGroup.Option>
    );
  }

  return (
    <>
      { (books.length === 0) &&
        <div className=" w-full h-screen flex justify-center items-center">
          <h3 className=" text-3xl font-medium font-secondary"> Store is Empty </h3>
        </div>
      }
      { (books.length !== 0) &&
        <>
          <div className=" w-full h-[90%] grid grid-cols-2 md:grid-cols-4 justify-items-center content-start">
            { books.map(bookMapper) }
          </div>
          <RadioGroup value={ page } onChange={ setPage } className=" w-full h-[10%] flex justify-center items-end">
            { pages.map(paginationMapper) }
          </RadioGroup>
        </>
      }
    </>
  );
}