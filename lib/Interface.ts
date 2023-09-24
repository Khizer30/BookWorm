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

// UserType
interface UserType
{
  email: string;
  username: string;
  password: string;
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

export type { Children, Radio, HeadlessUI, Book, CartItem, UserType, BooksResponse, StoreMenu };