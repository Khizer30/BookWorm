import Image from "next/image";
//
import headerImg from "@images/header.webp";

// Header
export default function Header(): JSX.Element
{
  return (
    <>
      <div className=" w-full">
        <Image
          src={ headerImg }
          alt="Header Image"
          draggable="false"
          priority
          className=" w-full h-28 md:h-40"
        />
      </div>
    </>
  );
}