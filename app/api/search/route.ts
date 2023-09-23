import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection, type Filter } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type Book } from "@lib/Interface";

// Search
export async function GET(req: NextRequest): Promise<NextResponse<Book[]>>
{
  const client: MongoClient = await startClient();
  const collection: Collection<Book> = client.db("bookworm").collection<Book>("books");
  const url: URL = new URL(req.url);
  const query: string | null = url.searchParams.get("query");
  let books: Book[] = [];

  if (query)
  {
    const searchStr: RegExp = new RegExp(query, "i");
    const x: Filter<Book> =
    {
      $or:
        [
          { title: { $regex: searchStr } },
          { authors: { $regex: searchStr } },
          { tags: { $regex: searchStr } }
        ]
    };

    books = await collection.find(x).sort({ title: 1 }).toArray();
  }

  await client.close();

  return NextResponse.json(books);
}