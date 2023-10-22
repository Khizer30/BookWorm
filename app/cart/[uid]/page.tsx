import { type Metadata } from "next";
//
import Navbar from "@components/Navbar";
import Checkout from "@components/Checkout";
import Footer from "@components/Footer";
import { getCart } from "@lib/DB";
import { type Item } from "@lib/Interface";

// Metadata
export const metadata: Metadata =
{
  title: "Shopping Cart | BookWorm",
  keywords: ["BookWorm", "Shopping Cart"],
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

// Props
interface Props
{
  params: { uid: string; };
}

// Page
export default async function Page({ params }: Props): Promise<JSX.Element>
{
  const items: Item[] = await getCart(params.uid);

  return (
    <>
      <Navbar />
      <Checkout data={ items } />
      <Footer />
    </>
  );
}