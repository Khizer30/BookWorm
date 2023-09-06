import Image from "next/image";
//
import { type Book } from "@lib/Interface";

// Product
export default function Product({ title, price, description, image }: Book): JSX.Element
{
  return (
    <>
      <div className=" w-full p-4 grid grid-cols-1 md:grid-cols-2 justify-items-center content-center bg-light-grey">

        <div className=" w-full p-2 col-span-1 flex justify-center items-center">
          <Image
            src={ image }
            alt={ title }
            draggable="false"
            className=" w-40 md:w-48 rounded"
          />
        </div>

        <div className=" w-full p-2 col-span-1 flex flex-col justify-between items-center">

          <div className=" w-full mb-4">
            <h1 className=" w-full text-xl font-medium font-secondary"> { title } </h1>
            <h3 className=" w-full mt-2 font-primary"> { `Rs ${ price }` } </h3>
            <hr className=" h-[0.15rem] mt-2" />
          </div>

          <div className=" w-full my-2">
            <h2 className=" w-full font-medium font-secondary"> Product Description </h2>
            <h3 className=" w-full mt-2 text-sm font-light font-primary"> { description || "No Description" } </h3>
          </div>

          <div className=" w-full my-4">
            <h2 className=" w-full font-medium font-secondary"> Quantity </h2>
            <input
              name="quantity"
              type="number"
              min={ 1 }
              max={ 9 }
              required
              value={ 1 }
              className=" w-full md:w-36 h-10 mt-2 p-4 rounded text-center md:text-start text-sm font-primary input"
            />
          </div>

          <div className=" w-full mt-4">
            <button className=" w-full md:w-36 h-12 rounded text-sm text-white font-primary bg-dark-primary scale">
              Add to Cart
            </button>
          </div>

        </div>

      </div>
    </>
  );
}