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

// Res
interface Res
{
  code: number;
  message: string;
}

// Books Response
interface BooksResponse
{
  books: Book[];
  pages: number[];
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
  pid: string;
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
  cart: Cart[];
}

// Cart
interface Cart
{
  bid: string;
  quantity: number;
}

// Item
interface Item
{
  id: string;
  title: string;
  price: number;
  image: StaticImageData | string;
  pid: string;
  quantity: number;
}

// Product
interface Product
{
  uid: string;
  bid: string;
  title: string;
  quantity: number;
}

// Stripe Request
interface StripeReq
{
  uid: string;
  email: string;
  products: StripeProduct[];
}

// Stripe Product
interface StripeProduct
{
  price: string;
  quantity: number;
}

export type { Children, Radio, HeadlessUI, Res, BooksResponse, Book, StoreMenu, TheUser, Cart, Item, Product, StripeReq, StripeProduct };