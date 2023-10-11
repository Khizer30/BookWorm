"use client";
import { useState, useEffect, useRef, type MutableRefObject } from "react";
import { useSearchParams } from "next/navigation";
import { RadioGroup } from "@headlessui/react";
//
import Card from "@components/Card";
import Animation from "@components/Animation";
import { useStoreContext } from "@lib/StoreContext";
import { type HeadlessUI, type BooksResponse, type Book } from "@lib/Interface";

// Store
export default function Store(storeInitialData: BooksResponse): JSX.Element
{
  const param: string | null = useSearchParams().get("subject");
  const [books, setBooks] = useState<Book[]>(param ? [] : storeInitialData.books);
  const [pages, setPages] = useState<number[]>(storeInitialData.pages);
  const [page, setPage] = useState<number>(storeInitialData.pages[0]);
  const { subject, price, sort } = useStoreContext();
  const isInitialMount1: MutableRefObject<boolean> = useRef<boolean>(true);
  const isInitialMount2: MutableRefObject<boolean> = useRef<boolean>(true);

  // Not Reset Current Page
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

  // Reset Current Page
  useEffect(() =>
  {
    if (isInitialMount2.current)
    {
      isInitialMount2.current = false;

      if (param)
      {
        getBooks(pages[0]);
      }
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
      <Card { ...book } key={ book._id } />
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
          <Animation />
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