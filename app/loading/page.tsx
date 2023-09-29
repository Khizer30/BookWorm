import { type Metadata } from "next";
//
import Animation from "@components/Animation";

// Metadata
export const metadata: Metadata =
{
  title: "Loading | BookWorm",
  keywords: ["BookWorm", "Loading"],
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
      <div className=" w-screen h-screen flex justify-center items-center">
        <Animation />
      </div>
    </>
  );
}