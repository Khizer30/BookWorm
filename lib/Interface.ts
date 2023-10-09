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
  _id: string;
  title: string;
  price: number;
  description: string;
  authors: string[];
  image: StaticImageData | string;
  tags: string[];
}

// Books Response
interface BooksResponse
{
  books: Book[];
  pages: number[];
}

// Store Menu
interface StoreMenu
{
  subject: string;
  price: number;
  sort: number;
}

// The User
interface TheUser
{
  _id: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
  address: string | null;
  city: string | null;
  cart: { bid: string, quantity: number; }[];
}

// Product
interface Product
{
  uid: string;
  bid: string;
  title: string;
  quantity: number;
}

// Res
interface Res
{
  code: number;
  message: string;
}

// Cart Item
interface CartItem
{
  title: string;
  price: number;
  image: StaticImageData | string;
  quantity: number;
}

export type { Children, Radio, HeadlessUI, Book, BooksResponse, StoreMenu, TheUser, Product, Res, CartItem };