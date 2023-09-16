import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection, type Filter, type SortDirection } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type Book, type BooksResponse } from "@lib/Interface";

// Books
export async function GET(req: NextRequest): Promise<NextResponse<BooksResponse>>
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
  let pages: number[] = [];

  if (page && subject && price && sort)
  {
    const x: Filter<Book> = (subject === "all") ? {} : { tags: { $in: [subject] } };
    const y: Filter<Book> = (price === "Infinity") ? {} : { price: { $gte: +price - 500, $lt: +price } };
    const z: SortDirection = (sort === "1") ? 1 : -1;

    books = await collection.find({ ...x, ...y }).sort({ title: z }).limit(pageSize).skip((+page - 1) * pageSize).toArray();
    const maxPage: number = Math.ceil((await collection.countDocuments({ ...x, ...y })) / pageSize);

    // Create Page Array
    for (let i: number = 1; i <= maxPage; i++)
    {
      pages.push(i);
    }
  }
  else
  {
    books = await collection.find().sort({ title: 1 }).limit(pageSize).toArray();
    const maxPage: number = Math.ceil((await collection.countDocuments()) / pageSize);

    // Create Page Array
    for (let i: number = 1; i <= maxPage; i++)
    {
      pages.push(i);
    }
  }

  await client.close();

  return NextResponse.json({ books: books, pages: pages });
}