"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { type User } from "firebase/auth";
//
import { useAuthContext } from "@lib/AuthContext";
import { type Res } from "@lib/Interface";

// Props
interface Props
{
  bid: string;
  title: string;
}

// Product Form
export default function ProductForm({ bid, title }: Props): JSX.Element
{
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
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
          body: JSON.stringify({ uid: user.uid, bid: bid, title: title, quantity: quantity })
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

        <Dialog open={ isOpen } onClose={ () => setIsOpen(false) } as="div" className=" w-screen h-screen z-10 flex justify-center items-center fixed">
          <Dialog.Panel className=" w-3/4 md:w-1/2 flex justify-center items-center">
            <div className=" w-full flex flex-col justify-center items-center rounded-lg bg-white">
              <div className=" w-full h-1/4 p-4 flex justify-between items-center rounded-t-lg text-white bg-dark-primary">
                <h2 className=" font-medium font-primary"> Cart Updated </h2>
                <button onClick={ () => setIsOpen(false) } className=" scale">
                  <FontAwesomeIcon
                    icon={ faXmark }
                    className=" w-6 h-6"
                  />
                </button>
              </div>
              <div className=" w-full h-3/4 p-4">
                <h3 className=" text-sm font-light font-primary"> { message } </h3>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>

      </form >
    </>
  );
}