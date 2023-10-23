"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { type User } from "firebase/auth";
//
import Popup from "@components/Popup";
import { useAuthContext } from "@lib/AuthContext";
import { type Res, type Product } from "@lib/Interface";

// Props
interface Props
{
  bid: string;
  title: string;
}

// Product Form
export default function ProductForm({ bid, title }: Props): JSX.Element
{
  const [quantity, setQuantity] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const user: User | null | undefined = useAuthContext();
  const router: AppRouterInstance = useRouter();

  // Handle Submit
  function handleSubmit(e: FormEvent<HTMLFormElement>): void
  {
    e.preventDefault();
  }

  // Send Product
  async function sendProduct(): Promise<void>
  {
    if (user)
    {
      const response: Response = await fetch("/api/product",
        {
          mode: "same-origin",
          method: "POST",
          headers:
          {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ uid: user.uid, bid: bid, title: title, quantity: quantity } as Product)
        });
      const result: Res = await response.json();

      setMessage(result.message);
      setIsOpen(true);
    }
    else
    {
      router.push("/auth/login");
    }
  }

  // Add To Card
  function addToCart(): void
  {
    sendProduct();
  }

  return (
    <>
      <form
        method="post"
        target="_self"
        autoComplete="off"
        encType="application/x-www-form-urlencoded"
        noValidate
        onSubmit={ handleSubmit }
        className=" w-full"
      >

        <div className=" w-full my-1">
          <h2 className=" w-full font-medium font-secondary"> Quantity </h2>
          <input
            name="quantity"
            type="number"
            required
            min={ 1 }
            max={ 5 }
            value={ quantity }
            onChange={ (e: ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value) }
            className=" w-full md:w-36 h-10 my-2 p-4 rounded text-center md:text-start text-sm font-primary input"
          />
        </div>
        <div className=" w-full mt-2">
          <button onClick={ addToCart } type="submit" className=" w-full md:w-36 h-12 rounded text-sm text-white font-primary bg-dark-primary scale">
            Add to Cart
          </button>
        </div>

        <Popup
          title="Cart Updated"
          message={ message }
          isOpen={ isOpen }
          close={ () => setIsOpen(false) }
        />

      </form >
    </>
  );
}