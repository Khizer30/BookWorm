"use client";
import { useState, type ChangeEvent } from "react";

// Product Form
export default function ProductForm(): JSX.Element
{
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <>
      <form method="post" target="_self" encType="application/x-www-form-urlencoded" className=" w-full">
        <div className=" w-full my-1">
          <h2 className=" w-full font-medium font-secondary"> Quantity </h2>
          <input
            name="quantity"
            type="number"
            required
            min={ 1 }
            max={ 9 }
            value={ quantity }
            onChange={ (e: ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value) }
            className=" w-full md:w-36 h-10 my-2 p-4 rounded text-center md:text-start text-sm font-primary input"
          />
        </div>

        <div className=" w-full mt-2">
          <button type="submit" className=" w-full md:w-36 h-12 rounded text-sm text-white font-primary bg-dark-primary scale">
            Add to Cart
          </button>
        </div>
      </form>
    </>
  );
}