import Image from "next/image";
//
import { type Book } from "@lib/Interface";
import errorImg from "@images/error.webp";

// Card
export default function Card({ title, price, image }: Book): JSX.Element
{
  return (
    <>
      <div className=" w-40 md:w-52 h-80 md:h-[24rem] p-4 flex flex-col justify-between items-center rounded-md hover:bg-light-grey cursor-pointer active:scale-95 transition-all duration-250">
        <Image
          src={ image || errorImg }
          alt={ title }
          width={ 250 }
          height={ 400 }
          draggable="false"
          placeholder="empty"
          className=" w-28 md:w-40 rounded"
        />
        <h3 className=" w-full h-full mt-2 text-sm md:text-base font-medium font-secondary"> { title } </h3>
        <h4 className=" w-full text-xs md:text-sm font-primary"> { `Rs ${ price }` } </h4>
      </div>
    </>
  );
}