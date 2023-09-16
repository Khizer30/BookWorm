"use client";
import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
//
import Card from "@components/Card";
import { useStoreContext } from "@lib/StoreContext";
import { type HeadlessUI, type Book, type StoreInitial } from "@lib/Interface";

// Store
export default function Store(storeInitialData: StoreInitial): JSX.Element
{
  const [books, setBooks] = useState<Book[]>(storeInitialData.books);
  const [page, setPage] = useState<number>(storeInitialData.pages[0]);
  const { subject, price, sort } = useStoreContext();

  // Change Books
  useEffect(() =>
  {
    getBooks();
  }, [page, subject, price, sort]);

  // Get Books
  async function getBooks(): Promise<void>
  {
    const url: string = `/api/books?page=${ page }&subject=${ subject }&price=${ price }&sort=${ sort }`;

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

    const result: Book[] = await response.json();
    setBooks(result);
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
        <h3 className=" text-3xl font-medium font-secondary"> Store is Empty </h3>
      }
      { (books.length !== 0) &&
        <>
          <div className=" w-full h-[90%] grid grid-cols-2 md:grid-cols-4 justify-items-center content-start">
            { books.map(bookMapper) }
          </div>
          <RadioGroup value={ page } onChange={ setPage } className=" w-full h-[10%] flex justify-center items-end">
            { storeInitialData.pages.map(paginationMapper) }
          </RadioGroup>
        </>
      }
    </>
  );
}