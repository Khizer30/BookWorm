"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, type ReadonlyURLSearchParams } from "next/navigation";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import { type User } from "firebase/auth";
//
import CartItem from "@components/CartItem";
import Popup from "@components/Popup";
import { useAuthContext } from "@lib/AuthContext";
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { type Res, type Item, type StripeReq, type StripeProduct } from "@lib/Interface";

// Props
interface Props
{
  data: Item[];
}

// Start Stripe
const stripePromise: Promise<Stripe | null> = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);

// Checkout
export default function Checkout({ data }: Props): JSX.Element
{
  const [items, setItems] = useState<Item[]>(data);
  const [total, setTotal] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const user: User | null | undefined = useAuthContext();
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  // On Mount
  useEffect(() =>
  {
    // Calculate Total
    let temp: number = 0;

    for (let i: number = 0; i < items.length; i++)
    {
      temp += items[i].price * items[i].quantity;
    }

    setTotal(temp);

    // URL Search
    if (searchParams.get("success") === "true")
    {
      setItems([]);
      setMessage("Thank You For Your Purchase");
      setIsOpen(true);

      // Clear Cart API
    }
    else if (searchParams.get("success") === "false")
    {
      setMessage("Your Checkout Failed");
      setIsOpen(true);
    }
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

  // Stripe Checkout
  async function stripeCheckout(): Promise<void>
  {
    if (user)
    {
      const products: StripeProduct[] = [];

      for (let i: number = 0; i < items.length; i++)
      {
        products.push({ price: items[i].pid, quantity: items[i].quantity });
      }

      const response: Response = await fetch("/api/stripe",
        {
          mode: "same-origin",
          method: "POST",
          headers:
          {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ uid: user.uid, products: products } as StripeReq)
        });
      const result: Res = await response.json();

      if (result.code === 100)
      {
        router.push(result.message);
      }
      else
      {
        setMessage(result.message);
        setIsOpen(true);
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
              <Link href="/store" className=" w-36 h-12 my-2 flex justify-center items-center rounded text-sm font-primary bg-white scale">
                View Collection
              </Link>
            </div>
          }
          { items.map(itemMapper) }
        </div>
        { (items.length !== 0) &&
          <div className=" w-full flex flex-col justify-center items-end">
            <h2 className=" md:text-lg font-medium font-secondary"> { `Subtotal Rs ${ total }.00` } </h2>
            <button onClick={ stripeCheckout } className=" w-full md:w-36 h-12 my-2 rounded text-sm text-white font-primary bg-dark-primary scale">
              Checkout
            </button>
          </div>
        }

        <Popup
          title="Dear Customer"
          message={ message }
          isOpen={ isOpen }
          close={ () => setIsOpen(false) }
        />
      </div >
    </>
  );
}