import { type Metadata } from "next";
//
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Sidebar from "@components/Siderbar";
import Store from "@components/Store";
import Footer from "@components/Footer";
import { startStore } from "@lib/DB";
import { type BooksResponse } from "@lib/Interface";

// Metadata
export const metadata: Metadata =
{
  title: "Store | BookWorm",
  keywords: ["BookWorm", "Store"],
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
export default async function Page(): Promise<JSX.Element>
{
  const storeInitialData: BooksResponse = await startStore();

  return (
    <>
      <Navbar />
      <Header />
      <Sidebar>
        <Store { ...storeInitialData } />
      </Sidebar>
      <Footer />
    </>
  );
}