import { type Metadata } from "next";
//
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Features from "@components/Features";
import Listings from "@components/Listings";
import Footer from "@components/Footer";
// import Product from "@components/Product";
// import img from "@images/demo/2.webp";

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
      {/*
      <Product title="The Reconstruction of Religious Thought in Islam" price={ 999 } image={ img } />
      */}
      <Navbar />
      <Hero />
      <Features />
      <Listings />
      <Footer />
    </>
  );
}