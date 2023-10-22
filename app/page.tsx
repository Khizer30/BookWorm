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
  title: "BookWorm",
  keywords: ["BookWorm", "Homepage"],
  description: "BookWorm is your premier e-commerce destination for a vast selection of books.",
  viewport:
  {
    width: "device-width",
    initialScale: 1
  },
  authors:
  {
    name: "Syed Muhammad Khizer",
    url: "https://syedmuhammadkhizer.vercel.app"
  },
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
      <Navbar />
      <Hero />
      <Features />
      { /* @ts-expect-error */ }
      <Listings heading="Popular Books" />
      <Footer />
    </>
  );
}