import { type Metadata } from "next";
//
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Footer from "@components/Footer";

// Metadata
export const metadata: Metadata =
{
  title: "Store | Book Worm",
  keywords: ["Book Worm", "Store"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}