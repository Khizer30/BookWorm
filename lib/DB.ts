import { type MongoClient, type Collection } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type Book, type BooksResponse } from "@lib/Interface";

// Start Store
async function startStore(): Promise<BooksResponse>
{
  const client: MongoClient = await startClient();
  const collection: Collection<Book> = client.db("bookworm").collection<Book>("books");
  const pageSize: number = 8;
  let books: Book[] = [];
  let pages: number[] = [];

  books = await collection.find().sort({ title: 1 }).limit(pageSize).toArray();
  const maxPage: number = Math.ceil((await collection.countDocuments()) / pageSize);

  // Create Page Array
  for (let i: number = 1; i <= maxPage; i++)
  {
    pages.push(i);
  }

  await client.close();

  return { books: books, pages: pages };
}

export { startStore };