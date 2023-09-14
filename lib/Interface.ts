import type React from "react";
import { type StaticImageData } from "next/image";

// Children
interface Children
{
  children: React.ReactNode;
}

// Radio
interface Radio
{
  name: string;
  value: string | number;
}

// Headless UI
interface HeadlessUI
{
  checked: boolean;
}

// Book
interface Book
{
  title: string;
  price: number;
  description?: string;
  image: StaticImageData | string;
}

// Cart Item
interface CartItem
{
  title: string;
  price: number;
  image: StaticImageData | string;
  quantity: number;
}

// UserType
interface UserType
{
  email: string;
  username: string;
  password: string;
}

export type { Children, Radio, HeadlessUI, Book, CartItem, UserType };