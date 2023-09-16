import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type Book } from "@lib/Interface";

// Books
export async function GET(req: NextRequest): Promise<NextResponse<Book[]>>
{
  const client: MongoClient = await startClient();
  const collection: Collection<Book> = client.db("bookworm").collection<Book>("books");
  const pageSize: number = 8;
  const url: URL = new URL(req.url);
  const page: string | null = url.searchParams.get("page");
  const subject: string | null = url.searchParams.get("subject");
  const price: string | null = url.searchParams.get("price");
  const sort: string | null = url.searchParams.get("sort");
  let books: Book[] = [];

  if (page && subject && price && sort)
  {
    books = await collection.find().sort({ title: 1 }).limit(pageSize).skip((+page - 1) * pageSize).toArray();
  }
  else
  {
    books = await collection.find().sort({ title: 1 }).limit(pageSize).toArray();
  }

  await client.close();

  return NextResponse.json(books);
}