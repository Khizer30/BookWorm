import Image from "next/image";
//
import logo from "@images/logo.webp";

// Footer
export default function Footer(): JSX.Element
{
  return (
    <>
      <div className=" w-full h-72 p-4 flex flex-col justify-center items-start bg-dark-primary">

        <div className=" w-full h-56 flex flex-row justify-around items-center">
          <div className=" w-1/2 h-full flex justify-start items-center">
            <Image
              src={ logo }
              alt="Book Worm"
              draggable="false"
              className=" w-36 h-36 scale"
            />
          </div>

          <div className=" w-1/2 h-full flex flex-col justify-center items-start">
            <h6 className=" text-white text-xl leading-loose font-primary"> Categories </h6>
            <a className=" text-white text-sm leading-relaxed font-primary scale"> Quran </a>
            <a className=" text-white text-sm leading-relaxed font-primary scale"> Hadith </a>
            <a className=" text-white text-sm leading-relaxed font-primary scale"> Fiqh </a>
            <a className=" text-white text-sm leading-relaxed font-primary scale"> Ilm-ul-Kalam </a>
            <a className=" text-white text-sm leading-relaxed font-primary scale"> Tasawwuf </a>
          </div>
        </div>

        <div className=" w-full h-16 flex flex-col justify-center items-center">
          <hr className=" w-11/12 h-1 rounded-full bg-primary" />
          <span className=" w-11/12 pt-4 text-white text-sm font-primary"> Copyright 2022 Book Worm LTD </span>
        </div>

      </div>
    </>
  );
}