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

// Cart Item
interface CartItem
{
  title: string;
  price: number;
  image: StaticImageData | string;
  quantity: number;
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
  cart: UserCart[];
}

// User Cart
interface UserCart
{
  bid: string;
  quantity: number;
}

// Firebase Error
interface FirebaseError
{
  code: number;
  message: string;
}

export type { Children, Radio, HeadlessUI, Book, CartItem, BooksResponse, StoreMenu, TheUser, UserCart, FirebaseError };