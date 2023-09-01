import { type Metadata } from "next";
//
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Sidebar from "@components/Siderbar";
import Listings from "@components/Listings";
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
      <Sidebar>
        <Listings heading="" />
        <Listings heading="" />
      </Sidebar>
      <Footer />
    </>
  );
}