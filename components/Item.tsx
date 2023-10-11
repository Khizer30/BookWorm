import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
//
import { type Item } from "@lib/Interface";

// Item
export default function Item({ title, price, image, quantity }: Item): JSX.Element
{
  return (
    <>
      <div className=" w-full my-4 col-span-6 md:col-span-8 flex justify-center items-center">
        <Image
          src={ image }
          alt={ title }
          draggable="false"
          className=" w-12 md:w-20 mr-1 rounded"
        />
        <div className=" w-full ml-1">
          <h2 className=" w-full mb-1 text-sm md:text-base font-medium font-secondary"> { title } </h2>
          <h3 className=" w-full mt-1 text-xs md:text-sm font-primary"> { `Rs ${ price }` } </h3>
        </div>
      </div>

      <div className=" w-full my-4 col-span-3 md:col-span-2 flex justify-center items-center">
        <h3 className=" w-10 md:w-20 h-10 mr-1 flex justify-center items-center rounded text-sm md:text-base font-primary bg-white"> { quantity } </h3>
        <button className=" w-10 h-10 ml-1 rounded hover:text-white bg-white hover:bg-dark-primary scale">
          <FontAwesomeIcon
            icon={ faTrashCan }
          />
        </button>
      </div>

      <div className=" w-full my-4 col-span-3 md:col-span-2 flex justify-center items-center">
        <h3 className=" w-full text-end text-sm md:text-base font-primary"> { `Rs ${ price * quantity }` } </h3>
      </div>
    </>
  );
}