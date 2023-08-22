"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
//
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

  return (
    <>
      <nav className=" w-screen h-auto p-4">
        <div className=" grid grid-cols-12">

          <div className=" w-full h-full col-span-6 md:col-span-3 flex justify-start items-center">
            <Image
              src={ logo }
              alt="Book Worm"
              draggable="false"
              className=" w-20 h-20 scale"
            />
          </div>

          <div className=" w-full h-full hidden md:flex col-span-0 md:col-span-6 justify-center items-center">
            <a className=" p-4 font-epilogue scale"> Quran </a>
            <a className=" p-4 font-epilogue scale"> Hadith </a>
            <a className=" p-4 font-epilogue scale"> Fiqh </a>
            <a className=" p-4 font-epilogue scale"> Ilm-ul-Kalam </a>
            <a className=" p-4 font-epilogue scale"> Tasawwuf </a>
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
          className=" pb-4 flex flex-col"
          enter=" transition duration-100 ease-out"
          enterFrom=" transform scale-95 opacity-0"
          enterTo=" transform scale-100 opacity-100"
          leave=" transition duration-75 ease-out"
          leaveFrom=" transform scale-100 opacity-100"
          leaveTo=" transform scale-95 opacity-0"

        >
          <a className=" px-4 py-1 hover:font-medium active:font-semibold text-right font-epilogue transition-all"> Quran </a>
          <a className=" px-4 py-1 hover:font-medium active:font-semibold text-right font-epilogue transition-all"> Hadith </a>
          <a className=" px-4 py-1 hover:font-medium active:font-semibold text-right font-epilogue transition-all"> Fiqh </a>
          <a className=" px-4 py-1 hover:font-medium active:font-semibold text-right font-epilogue transition-all"> Ilm-ul-Kalam </a>
          <a className=" px-4 py-1 hover:font-medium active:font-semibold text-right font-epilogue transition-all"> Tasawwuf </a>
        </Transition>
      </nav>
    </>
  );
}