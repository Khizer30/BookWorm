"use client";
import { useState, useEffect } from "react";
import { onAuthStateChanged, type Unsubscribe, type User } from "firebase/auth";
import { type Metadata } from "next";
import "@fontsource-variable/epilogue";
import "@fontsource-variable/montserrat";
//
import Animation from "@components/Animation";
import AuthContext from "@lib/AuthContext";
import auth from "@lib/Firebase";
import { type Children } from "@lib/Interface";
import "./globals.css";

// Metadata
export const metadata: Metadata =
{
  title: { default: "BookWorm", template: "%s" },
  keywords: "%s",
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
  }
};

// Layout
export default function Layout({ children }: Children): JSX.Element
{
  const [user, setUser] = useState<User | null | undefined>(undefined);

  // Set User
  useEffect(() =>
  {
    const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (x: User | null) =>
    {
      setUser(x);
    });

    return () => unsubscribe();
  }, []);

  return (
    <html lang="en-PK">
      <body>
        { (user === undefined) ?
          (
            <div className=" w-screen h-screen flex justify-center items-center">
              <Animation />
            </div>
          ) : (
            <AuthContext.Provider value={ user }>
              { children }
            </AuthContext.Provider>
          )
        }
      </body>
    </html>
  );
}