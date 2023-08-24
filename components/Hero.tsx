import Image from "next/image";
//
import heroImg from "@images/hero.webp";

// Hero
export default function Hero(): JSX.Element
{
  return (
    <>
      <div className=" w-full grid grid-cols-1 md:grid-cols-3">

        <Image
          src={ heroImg }
          alt="Cover Image"
          draggable="false"
          className=" h-full col-span-1 md:col-span-2 order-2 md:order-1"
        />

        <div className=" min-h-[20rem] p-6 col-span-1 order-1 md:order-2 flex flex-col justify-center items-center md:bg-light-grey">

          <h1 className=" my-2 text-justify text-xl font-medium font-primary">
            Welcome to Book Worm, your one-stop destination for a world of knowledge and spiritual enrichment.
          </h1>

          <h2 className=" my-2 text-justify text-sm font-primary">
            At Book Worm, we specialize in curating an extensive collection of Islamic books that cater to both curious minds and devout souls.
          </h2>

          <div className=" w-full my-2 flex justify-center items-center">
            <button className=" w-36 h-12 rounded-lg text-sm font-primary bg-light-grey md:bg-white scale">
              Visit Store
            </button>
          </div>

        </div>

      </div>
    </>
  );
}