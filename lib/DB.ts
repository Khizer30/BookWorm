import { type MongoClient, type Collection, type WithId } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type Book } from "@lib/Interface";

// Get Books
async function getBooks(): Promise<string>
{
  const client: MongoClient = await startClient();

  const collection: Collection<Book> = client.db("bookworm").collection<Book>("books");
  const result: WithId<Book>[] = await collection.find().toArray();

  await client.close();

  return JSON.stringify(result);
}

export { getBooks };