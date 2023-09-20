"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
//
import books from "@lib/Books";
import { type CartItem } from "@lib/Interface";

// Items
const items: CartItem[] =
  [
    {
      title: books[0].title,
      price: books[0].price,
      image: books[0].image,
      quantity: 1
    },
    {
      title: books[1].title,
      price: books[1].price,
      image: books[1].image,
      quantity: 3
    }
  ];

// Checkout
export default function Checkout(): JSX.Element
{
  const [total, setTotal] = useState<number>(0);

  // On Mount
  useEffect(() =>
  {
    let temp: number = 0;

    for (let i: number = 0; i < items.length; i++)
    {
      temp += items[i].price * items[i].quantity;
    }

    setTotal(temp);
  }, []);

  // Item Mapper
  function itemMapper(item: CartItem): JSX.Element
  {
    return (
      <Item { ...item } key={ item.title } />
    );
  }

  return (
    <>
      <div className=" w-full min-h-[60vh] p-6 flex flex-col justify-between items-center bg-light-grey">
        <div className=" w-full grid grid-cols-12 justify-items-center content-center">
          <h2 className=" w-full pb-2 col-span-6 md:col-span-8 text-start md:text-lg font-medium font-secondary border-b-2 border-b-white"> Product </h2>
          <h2 className=" w-full pb-2 col-span-3 md:col-span-2 text-center md:text-lg font-medium font-secondary border-b-2 border-b-white"> Quantity </h2>
          <h2 className=" w-full pb-2 col-span-3 md:col-span-2 text-end md:text-lg font-medium font-secondary border-b-2 border-b-white"> Total </h2>
          { (items.length === 0) &&
            <div className=" w-full h-full my-2 col-span-12 flex flex-col justify-center items-center">
              <h3 className=" my-2 text-xl font-medium font-secondary"> Your Cart is Empty </h3>
              <button className=" w-36 h-12 my-2 rounded text-sm font-primary bg-white outline-none scale">
                View Collection
              </button>
            </div>
          }
          { items.map(itemMapper) }
        </div>
        { (items.length !== 0) &&
          <div className=" w-full flex flex-col justify-center items-end">
            <h2 className=" md:text-lg font-medium font-secondary"> { `Subtotal Rs ${ total }` } </h2>
            <button className=" w-full md:w-36 h-12 my-2 rounded text-sm text-white font-primary bg-dark-primary outline-none scale">
              Checkout
            </button>
          </div>
        }
      </div >
    </>
  );
}

// Item
function Item({ title, price, image, quantity }: CartItem): JSX.Element
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