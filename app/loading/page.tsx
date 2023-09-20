import { type Metadata } from "next";
//
import Animation from "@components/Animation";

// Metadata
export const metadata: Metadata =
{
  title: "Loading | Book Worm",
  keywords: ["Book Worm", "Loading"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center">
        <Animation />
      </div>
    </>
  );
}