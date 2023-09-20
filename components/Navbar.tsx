"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
//
import { subjects } from "@lib/Filters";
import { type Radio } from "@lib/Interface";
import logo from "@images/logo.webp";

// Navbar
export default function Navbar(): JSX.Element
{
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  return (
    <>
      <nav className=" w-full h-auto p-4">
        <div className=" grid grid-cols-12">

          <div className=" w-full h-full col-span-6 md:col-span-3 flex justify-start items-center">
            <Image
              src={ logo }
              alt="Book Worm"
              draggable="false"
              className=" w-20 h-20 cursor-pointer scale"
            />
          </div>

          <div className=" w-full h-full col-span-0 md:col-span-6 hidden md:flex justify-center items-center">
            { subjects.slice(1).map(linkMapper) }
          </div>

          <div className=" w-full h-full col-span-6 md:col-span-3 flex justify-end items-center">
            <a className=" w-6 h-6 m-2 scale">
              <FontAwesomeIcon
                icon={ faCartShopping }
                className=" w-6 h-6"
              />
            </a>

            <a className=" w-6 h-6 m-2 scale">
              <FontAwesomeIcon
                icon={ faUser }
                className=" w-6 h-6"
              />
            </a>

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