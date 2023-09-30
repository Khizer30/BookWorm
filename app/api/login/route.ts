import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection, type Filter, type UpdateFilter, type UpdateOptions, type UpdateResult } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type TheUser } from "@lib/Interface";

// Login
export async function POST(req: NextRequest)
{
  const client: MongoClient = await startClient();
  const collection: Collection<TheUser> = client.db("bookworm").collection<TheUser>("users");
  const user: TheUser = await req.json();

  const x: Filter<TheUser> = { _id: user._id };
  const y: UpdateFilter<TheUser> =
  {
    $setOnInsert: user
  };
  const z: UpdateOptions =
  {
    upsert: true
  };

  const result: UpdateResult<TheUser> = await collection.updateOne(x, y, z);

  await client.close();

  return NextResponse.json(result);
}