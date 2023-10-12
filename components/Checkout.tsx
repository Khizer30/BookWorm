"use client";
import { useState, useEffect } from "react";
import { type User } from "firebase/auth";
//
import CartItem from "@components/CartItem";
import { useAuthContext } from "@lib/AuthContext";
import { type Res, type Item } from "@lib/Interface";

// Props
interface Props
{
  data: Item[];
}

// Checkout
export default function Checkout({ data }: Props): JSX.Element
{
  const [items, setItems] = useState<Item[]>(data);
  const [total, setTotal] = useState<number>(0);
  const user: User | null | undefined = useAuthContext();

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

  // Cart Item Mapper
  function itemMapper(item: Item): JSX.Element
  {
    return (
      <CartItem item={ item } remove={ removeItem } key={ item.id } />
    );
  }

  // Remove Item
  async function removeItem(bid: string): Promise<void>
  {
    if (user)
    {
      const response: Response = await fetch("/api/cart",
        {
          mode: "same-origin",
          method: "POST",
          headers:
          {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ uid: user.uid, bid: bid })
        });
      const res: Res = await response.json();

      if (res.code === 100)
      {
        const temp: Item[] = [];
        let tempTotal: number = 0;

        for (let i: number = 0; i < items.length; i++)
        {
          if (items[i].id !== bid)
          {
            temp.push(items[i]);
            tempTotal += items[i].price * items[i].quantity;
          }
        }

        setItems(temp);
        setTotal(tempTotal);
      }
    }
  }

  return (
    <>
      <div className=" w-full min-h-[60vh] p-6 flex flex-col justify-between items-center bg-light-grey">
        <div className=" w-full grid grid-cols-12 justify-items-center content-center">
          <h2 className=" w-full pb-2 col-span-9 md:col-span-10 text-start md:text-lg font-medium font-secondary border-b-2 border-b-white"> Product </h2>
          <h2 className=" w-full pb-2 col-span-3 md:col-span-2 text-end md:text-lg font-medium font-secondary border-b-2 border-b-white"> Total </h2>
          { (items.length === 0) &&
            <div className=" w-full h-full my-2 col-span-12 flex flex-col justify-center items-center">
              <h3 className=" my-2 text-xl font-medium font-secondary"> Your Cart is Empty </h3>
              <button className=" w-36 h-12 my-2 rounded text-sm font-primary bg-white scale">
                View Collection
              </button>
            </div>
          }
          { items.map(itemMapper) }
        </div>
        { (items.length !== 0) &&
          <div className=" w-full flex flex-col justify-center items-end">
            <h2 className=" md:text-lg font-medium font-secondary"> { `Subtotal Rs ${ total }` } </h2>
            <button className=" w-full md:w-36 h-12 my-2 rounded text-sm text-white font-primary bg-dark-primary scale">
              Checkout
            </button>
          </div>
        }
      </div >
    </>
  );
}