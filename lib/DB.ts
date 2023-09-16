import { type MongoClient, type Collection } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type Book, type StoreInitial } from "@lib/Interface";

// Start Store
async function startStore(): Promise<StoreInitial>
{
  const client: MongoClient = await startClient();
  const collection: Collection<Book> = client.db("bookworm").collection<Book>("books");
  const pageSize: number = 8;
  let pages: number[] = [];

  const books: Book[] = await collection.find().sort({ title: 1 }).limit(pageSize).toArray();
  const maxPage: number = Math.ceil((await collection.countDocuments()) / pageSize);

  // Create Page Array
  for (let i: number = 1; i <= maxPage; i++)
  {
    pages.push(i);
  }

  await client.close();

  return { pages: pages, books: books };
}

export { startStore };