import Image from "next/image";
//
import { type Book } from "@lib/Interface";
import errorImg from "@images/error.webp";

// Product
export default function Product({ title, price, description, image }: Book): JSX.Element
{
  return (
    <>
      <div className=" w-full p-4 grid grid-cols-1 md:grid-cols-2 justify-items-center content-center bg-light-grey">

        <div className=" w-full p-2 col-span-1 flex justify-center items-center">
          <Image
            src={ image || errorImg }
            alt={ title }
            draggable="false"
            className=" w-40 md:w-48 rounded"
          />
        </div>

        <div className=" w-full p-2 col-span-1 flex flex-col justify-between items-center">

          <div className=" w-full mb-2">
            <h1 className=" w-full text-xl font-medium font-secondary"> { title } </h1>
            <h3 className=" w-full my-2 font-primary"> { `Rs ${ price }` } </h3>
            <hr className=" h-1" />
          </div>

          <div className=" w-full my-1">
            <h2 className=" w-full font-medium font-secondary"> Product Description </h2>
            <h3 className=" w-full my-2 text-sm font-light font-primary"> { description || "No Description" } </h3>
          </div>

          <div className=" w-full my-1">
            <h2 className=" w-full font-medium font-secondary"> Author </h2>
            <h3 className=" w-full my-2 text-sm font-light font-primary"> Muhammad Iqbal </h3>
          </div>

          <div className=" w-full my-1">
            <h2 className=" w-full font-medium font-secondary"> Tags </h2>
            <div className=" w-full my-2 flex justify-start items-center">
              <h4 className=" mr-2 px-4 py-1 rounded text-xs font-secondary bg-white"> QURAN </h4>
            </div>
          </div>

          <div className=" w-full my-1">
            <h2 className=" w-full font-medium font-secondary"> Quantity </h2>
            <input
              name="quantity"
              type="number"
              min={ 1 }
              max={ 9 }
              required
              value={ 1 }
              className=" w-full md:w-36 h-10 my-2 p-4 rounded text-center md:text-start text-sm font-primary input"
            />
          </div>

          <div className=" w-full mt-2">
            <button className=" w-full md:w-36 h-12 rounded text-sm text-white font-primary bg-dark-primary scale">
              Add to Cart
            </button>
          </div>

        </div>

      </div>
    </>
  );
}