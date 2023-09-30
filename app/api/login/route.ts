import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection, type UpdateResult } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type TheUser } from "@lib/Interface";

// Login
export async function POST(req: NextRequest)
{
  const client: MongoClient = await startClient();
  const collection: Collection<TheUser> = client.db("bookworm").collection<TheUser>("users");
  const user: TheUser = await req.json();

  const result: UpdateResult<TheUser> = await collection.updateOne({ _id: user._id }, { $setOnInsert: user }, { upsert: true });

  await client.close();

  return NextResponse.json(result);
}