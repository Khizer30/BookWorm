import { type Metadata } from "next";
import "@fontsource-variable/epilogue";
import "@fontsource-variable/montserrat";
//
import "./globals.css";
import { type Children } from "@lib/Interface";

// Metadata
export const metadata: Metadata =
{
  title: { default: "Book Worm", template: "%s" },
  description: "%s",
  keywords: "%s",
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

// Layout
export default function Layout({ children }: Children): JSX.Element
{
  return (
    <html lang="en-PK">
      <body>
        { children }
      </body>
    </html>
  );
}