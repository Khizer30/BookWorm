"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faUser, faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons";
//
import { subjects } from "@lib/Filters";
import { type Radio, type Book } from "@lib/Interface";
import logo from "@images/logo.webp";
import errorImg from "@images/error.webp";

// Navbar
export default function Navbar(): JSX.Element
{
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[] | null>(null);

  // On Mount
  useEffect(() =>
  {
    // Close List
    function closeList(): void
    {
      setIsOpen(false);
    }

    window.addEventListener("resize", closeList);

    return () =>
    {
      window.removeEventListener("resize", closeList);
    };
  }, []);

  // Toggle Open
  function toggleOpen(): void
  {
    setIsOpen(!isOpen);
  }

  // Link
  function link(subject: string | number): void
  {
    window.location.href = `/store?subject=${ subject }`;
  }

  // Link Mapper
  function linkMapper(option: Radio): JSX.Element
  {
    return (
      <span className=" w-28 h-full flex justify-center items-center" key={ option.value }>
        <button onClick={ () => link(option.value) } className=" font-primary scale"> { option.name } </button>
      </span>
    );
  }

  // Span Mapper
  function spanMapper(option: Radio): JSX.Element
  {
    return (
      <span className=" h-8 px-4 py-1 text-end" key={ option.value }>
        <button onClick={ () => link(option.value) } className=" hover:text-sm active:text-xs font-primary transition-all duration-300"> { option.name } </button>
      </span>
    );
  }

  // Book Mapper
  function bookMapper(book: Book): JSX.Element
  {
    return (
      <Link href={ `/product/${ book._id }` } className=" w-full h-20 flex justify-between items-center cursor-pointer border-b-[0.5px] border-dark-primary hover:bg-light-grey transition-all" key={ book._id }>
        <Image
          src={ book.image || errorImg }
          alt={ book.title }
          width={ 250 }
          height={ 400 }
          draggable="false"
          placeholder="empty"
          className=" w-10 ml-2 md:ml-4 rounded"
        />
        <h3 className=" mr-2 md:mr-4 text-right text-xs md:text-sm font-primary"> { book.title } </h3>
      </Link>
    );
  }

  // Handle Submit
  function handleSubmit(e: FormEvent<HTMLFormElement>): void
  {
    e.preventDefault();
  }

  // Search Book
  async function searchBook(): Promise<void>
  {
    const url: string = `/api/search?query=${ query }`;

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

  return (
    <>
      <nav className=" w-full h-auto p-4">
        <div className=" grid grid-cols-12">

          <div className=" w-full h-full col-span-6 md:col-span-3 flex justify-start items-center">
            <Link href="/" title="BookWorm">
              <Image
                src={ logo }
                alt="BookWorm"
                draggable="false"
                className=" w-20 h-20 cursor-pointer scale"
              />
            </Link>
          </div>

          <div className=" w-full h-full col-span-0 md:col-span-6 hidden md:flex justify-center items-center">
            { subjects.slice(1).map(linkMapper) }
          </div>

          <div className=" w-full h-full col-span-6 md:col-span-3 flex justify-end items-center">
            <Popover className=" relative">
              <Popover.Button className=" w-6 h-6 m-2 flex justify-center items-center scale">
                <FontAwesomeIcon
                  icon={ faMagnifyingGlass }
                  className=" w-5 h-5"
                />
              </Popover.Button>
              <Transition
                enter=" transition ease-out duration-150"
                enterFrom=" transform scale-95 opacity-0"
                enterTo=" transform scale-100 opacity-100"
                leave=" transition ease-in duration-150"
                leaveFrom=" transform scale-100 opacity-100"
                leaveTo=" transform scale-95 opacity-0"
              >
                <Popover.Panel className=" w-60 md:w-80 my-3 z-10 flex flex-col justify-center items-center absolute right-0 bg-white search">
                  <form
                    method="get"
                    target="_self"
                    autoComplete="off"
                    encType="application/x-www-form-urlencoded"
                    onSubmit={ handleSubmit }
                    className=" w-full h-12 flex justify-between items-center border-b-[0.5px] border-dark-primary"
                  >
                    <input
                      name="query"
                      type="text"
                      placeholder="Enter Title, Author, ..."
                      required
                      value={ query }
                      onChange={ (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value) }
                      className=" w-4/5 h-full px-2 text-xs md:text-sm font-primary"
                    />
                    <button onClick={ searchBook } type="submit" className=" w-1/5 h-full flex justify-center items-center text-white bg-primary hover:bg-dark-primary transition-all">
                      <FontAwesomeIcon
                        icon={ faAngleRight }
                        className=" w-5 h-5"
                      />
                    </button>
                  </form>
                  <div className=" w-full max-h-20 md:max-h-60 overflow-y-auto">
                    { books &&
                      books.map(bookMapper)
                    }
                    { books && (books.length === 0) &&
                      <div className=" w-full h-12 flex justify-center items-center">
                        <h3 className=" text-xs md:text-sm font-primary"> No Book Found </h3>
                      </div>
                    }
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Link href="/cart" className=" w-6 h-6 m-2 flex justify-center items-center scale">
              <FontAwesomeIcon
                icon={ faCartShopping }
                className=" w-6 h-6"
              />
            </Link>

            <Link href="/profile" className=" w-6 h-6 m-2 flex justify-center items-center scale">
              <FontAwesomeIcon
                icon={ faUser }
                className=" w-6 h-6"
              />
            </Link>

            <button onClick={ toggleOpen } className=" w-6 h-6 m-2 md:hidden scale">
              <FontAwesomeIcon
                icon={ faBars }
                className=" w-6 h-6"
              />
            </button>
          </div>

        </div>
        <Transition
          show={ isOpen }
          className=" flex flex-col"
          enter=" transform opacity-0 transition ease-out duration-250"
          enterFrom=" translate-x-full"
          enterTo=" translate-x-0 opacity-100"
          leave=" transform opacity-100 transition ease-in duration-250"
          leaveFrom=" translate-x-0"
          leaveTo=" translate-x-full opacity-0"
        >
          { subjects.slice(1).map(spanMapper) }
        </Transition>
      </nav>
    </>
  );
}