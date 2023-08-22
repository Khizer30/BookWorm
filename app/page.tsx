import { type Metadata } from "next";
//
import Footer from "@components/Footer";

// Metadata
export const metadata: Metadata =
{
  title: "Book Worm",
  description: "Book Worm is your premier e-commerce destination for a vast selection of books.",
  keywords: ["Book Worm", "Homepage"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <Footer />
    </>
  );
}