import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
//
import LogInForm from "@components/Forms/LogInForm";
import LottiePlayer from "@components/LottiePlayer";
import logo from "@images/logo.webp";
import animation from "@images/login.json";

// Metadata
export const metadata: Metadata =
{
  title: "Log In | BookWorm",
  keywords: ["BookWorm", "Log In"],
  description: "BookWorm is your premier e-commerce destination for a vast selection of books.",
  viewport:
  {
    width: "device-width",
    initialScale: 1
  },
  authors:
  {
    name: "Syed Muhammad Khizer",
    url: "https://syedmuhammadkhizer.vercel.app"
  },
  icons:
  {
    icon:
    {
      rel: "icon",
      type: "image/webp",
      sizes: "32x32",
      url: "/images/favicon.webp"
    }
  }
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <div className=" w-full grid grid-cols-2 justify-items-center content-center">

        <div className=" w-full h-screen p-6 col-span-2 md:col-span-1 flex flex-col">
          <div className=" w-full h-28 flex justify-start items-center">
            <Link href="/" title="BookWorm">
              <Image
                src={ logo }
                alt="Logo"
                draggable="false"
                className=" w-20 md:w-24 h-20 md:h-24 scale"
              />
            </Link>
          </div>
          <div className=" w-full h-full flex flex-col justify-center items-center">
            <h1 className=" w-9/12 my-2 text-3xl font-semibold font-secondary"> Log In </h1>
            <h2 className=" w-9/12 my-2 text-sm font-secondary">
              To Go Back,
              <Link href="/" className=" text-primary hover:text-dark-primary font-semibold transition-all"> Click Here! </Link>
            </h2>
            <LogInForm />
          </div>
        </div>

        <div className=" w-0 md:w-full h-0 md:h-screen p-6 md:col-span-1 hidden md:flex justify-center items-center">
          <div className=" w-full h-full flex flex-col justify-center items-center rounded-xl bg-dark-primary">
            <div className=" w-full h-4/5 flex justify-center items-center">
              <LottiePlayer
                data={ animation }
                classNames=" w-3/4 scale"
              />
            </div>
            <div className=" w-3/4 h-1/5 flex flex-col justify-start items-start">
              <h1 className=" my-1 text-white text-4xl font-semibold font-secondary"> Log In to BookWorm </h1>
              <h1 className=" my-1 text-white text-xl font-secondary"> Pakistan's Biggest Book Store </h1>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}