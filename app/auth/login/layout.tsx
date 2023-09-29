"use client";
import { redirect } from "next/navigation";
import { type User } from "firebase/auth";
//
import { Children } from "@lib/Interface";
import { useAuthContext } from "@lib/AuthContext";

// Layout
export default function Layout({ children }: Children): JSX.Element
{
  const user: User | null | undefined = useAuthContext();

  if (user)
  {
    redirect("/");
  }

  return (
    <>
      { children }
    </>
  );
}