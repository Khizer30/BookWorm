import type React from "react";
import { type StaticImageData } from "next/image";

// Children
interface Children
{
  children: React.ReactNode;
}

// Book
interface Book
{
  title: string;
  price: number;
  description?: string;
  image: StaticImageData;
}

export type { Children, Book };