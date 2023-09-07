import { type Metadata } from "next";
import LottiePlayer from "@components/LottiePlayer";
//
import animation from "@images/notfound.json";

// Metadata
export const metadata: Metadata =
{
  title: "404 | Book Worm",
  keywords: ["Book Worm", "404"]
};

// 404
export default function NotFound(): JSX.Element
{
  return (
    <>
      <div className=" w-full h-screen flex flex-col justify-center items-center">
        <LottiePlayer
          data={ animation }
          classNames=" w-3/4 md:w-1/2 scale"
        />
        <button className=" w-1/2 md:w-1/4 h-12 rounded text-white font-secondary bg-primary hover:bg-dark-primary outline-none scale">
          Go Back
        </button>
      </div>
    </>
  );
}