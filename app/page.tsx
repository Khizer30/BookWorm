import { type Metadata } from "next";
//
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Features from "@components/Features";
import Listings from "@components/Listings";
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
      <Navbar />
      <Hero />
      <Features />
      <Listings />
      <Footer />
    </>
  );
}