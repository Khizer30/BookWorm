import Image from "next/image";
import Link from "next/link";
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
          priority
          className=" h-full col-span-1 md:col-span-2 order-2 md:order-1"
        />

        <div className=" p-6 col-span-1 order-1 md:order-2 flex flex-col justify-center items-center md:bg-light-grey">
          <h1 className=" my-2 text-xl font-medium font-secondary">
            Welcome to BookWorm, your one-stop destination for a world of knowledge and spiritual enrichment.
          </h1>
          <h2 className=" my-2 text-sm font-primary">
            At BookWorm, we specialize in curating an extensive collection of Islamic books that cater to both curious minds and devout souls.
          </h2>
          <div className=" w-full my-2 flex justify-center items-center">
            <Link href="/store" className=" w-36 h-12 rounded-lg flex justify-center items-center text-sm font-primary bg-light-grey md:bg-white scale">
              View Collection
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}