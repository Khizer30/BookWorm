import { type Metadata } from "next";
//
import Navbar from "@components/Navbar";
import Product from "@components/Product";
import Listings from "@components/Listings";
import Features from "@components/Features";
import Footer from "@components/Footer";
import books from "@lib/Books";

// Metadata
export const metadata: Metadata =
{
  title: "Product | Book Worm",
  keywords: ["Book Worm", "Product"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <Navbar />
      <Product { ...books[1] } />
      <Listings heading="Recommended" />
      <Features />
      <Footer />
    </>
  );
}