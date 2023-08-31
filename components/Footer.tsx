import Image from "next/image";
//
import logo from "@images/logo.webp";

// Footer
export default function Footer(): JSX.Element
{
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
            <h6 className=" my-1 text-white text-xl font-secondary"> Categories </h6>
            <a className=" mt-1 text-white text-sm font-secondary scale"> Quran </a>
            <a className=" mt-1 text-white text-sm font-secondary scale"> Hadith </a>
            <a className=" mt-1 text-white text-sm font-secondary scale"> Fiqh </a>
            <a className=" mt-1 text-white text-sm font-secondary scale"> Ilm-ul-Kalam </a>
            <a className=" mt-1 text-white text-sm font-secondary scale"> Tasawwuf </a>
          </div>

        </div>
        <div className=" w-full mt-8 flex flex-col justify-center items-center">
          <hr className=" w-11/12 h-1 rounded-full bg-primary" />
          <span className=" w-11/12 py-4 text-white text-sm font-secondary"> Copyright 2022 Book Worm LTD </span>
        </div>
      </div>
    </>
  );
}