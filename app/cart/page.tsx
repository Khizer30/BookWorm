import { type Metadata } from "next";
//
import Navbar from "@components/Navbar";
import Checkout from "@components/Checkout";
import Footer from "@components/Footer";

// Metadata
export const metadata: Metadata =
{
  title: "Shopping Cart | Book Worm",
  keywords: ["Book Worm", "Shopping Cart"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <Navbar />
      <Checkout />
      <Footer />
    </>
  );
}