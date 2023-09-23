import Link from "next/link";
import LottiePlayer from "@components/LottiePlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { type Metadata } from "next";
//
import animation from "@images/notfound.json";

// Metadata
export const metadata: Metadata =
{
  title: "404 | BookWorm",
  keywords: ["BookWorm", "404"]
};

// 404
export default function NotFound(): JSX.Element
{
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center content-center">

        <div className=" w-full h-screen col-span-1 flex flex-col justify-evenly items-center">
          <div className=" w-full flex flex-col justify-center items-center">
            <h1 className=" my-2 text-7xl text-center font-semibold font-secondary"> Ooops... </h1>
            <h2 className=" my-2 text-5xl text-center font-secondary"> Page Not Found! </h2>
          </div>
          <Link href="/" className=" w-48 h-12 flex justify-center items-center rounded text-white font-secondary bg-primary hover:bg-dark-primary scale">
            Go Back
            <FontAwesomeIcon
              icon={ faRightLong }
              className=" w-4 h-4 ml-4"
            />
          </Link>
        </div>

        <div className=" w-0 md:w-full h-0 md:h-screen col-span-1 hidden md:flex justify-center items-center">
          <LottiePlayer
            data={ animation }
            classNames=" w-4/5 scale"
          />
        </div>

      </div>
    </>
  );
}