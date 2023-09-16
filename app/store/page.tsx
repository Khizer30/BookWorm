import { type Metadata } from "next";
//
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Sidebar from "@components/Siderbar";
import Store from "@components/Store";
import Footer from "@components/Footer";
import { startStore } from "@lib/DB";
import { type StoreInitial } from "@lib/Interface";

// Metadata
export const metadata: Metadata =
{
  title: "Store | Book Worm",
  keywords: ["Book Worm", "Store"]
};

// Page
export default async function Page(): Promise<JSX.Element>
{
  const storeInitialData: StoreInitial = await startStore();

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