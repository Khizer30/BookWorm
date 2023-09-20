"use client";
import Image from "next/image";
//
import { subjects } from "@lib/Filters";
import { type Radio } from "@lib/Interface";
import logo from "@images/logo.webp";

// Footer
export default function Footer(): JSX.Element
{
  // Link
  function link(subject: string | number): void
  {
    window.location.href = `/store?subject=${ subject }`;
  }

  // Link Mapper
  function linkMapper(option: Radio): JSX.Element
  {
    return (
      <button onClick={ () => link(option.value) } className=" my-1 text-sm text-white font-secondary scale" key={ option.value }> { option.name } </button>
    );
  }

  return (
    <>
      <div className=" w-full h-72 p-6 bg-dark-primary">
        <div className=" grid grid-cols-2 justify-items-center content-center">

          <div className=" w-full h-full col-span-1 flex justify-start items-center">
            <Image
              src={ logo }
              alt="Book Worm"
              draggable="false"
              className=" w-36 h-36 cursor-pointer scale"
            />
          </div>

          <div className=" w-full h-full col-span-1 flex flex-col justify-center items-start">
            <h6 className=" my-1 text-xl text-white font-secondary"> Categories </h6>
            { subjects.slice(1).map(linkMapper) }
          </div>

        </div>
        <div className=" w-full mt-8 flex flex-col justify-center items-center">
          <hr className=" w-11/12 h-1 rounded-full bg-primary" />
          <span className=" w-11/12 my-4 text-sm text-white font-secondary"> Copyright 2022 Book Worm LTD </span>
        </div>
      </div>
    </>
  );
}