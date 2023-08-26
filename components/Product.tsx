import Image from "next/image";
//
import { type Book } from "@lib/Interface";

// Product
export default function Product({ title, price, image }: Book): JSX.Element
{
  return (
    <>
      <div className=" w-full p-4 grid grid-cols-1 md:grid-cols-2 justify-items-center content-center bg-light-grey">

        <div className=" w-full p-2 col-span-1 flex justify-center items-center">
          <Image
            src={ image }
            alt={ title }
            draggable="false"
            className=" w-40 rounded"
          />
        </div>


        <div className=" w-full p-2 col-span-1 flex flex-col justify-between items-center">
          <div className=" w-full">
            <h1> { title } </h1>
            <h1> { `Rs ${ price }` } </h1>
            <br />
          </div>

          <div className=" w-full">
            <h1> { title } </h1>
            <h1> { `Rs ${ price }` } </h1>
          </div>

          <div className=" w-full">
            <h1> { title } </h1>
            <h1> { `Rs ${ price }` } </h1>
          </div>
        </div>

      </div>
    </>
  );
}