import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection, type Filter, type UpdateFilter } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type TheUser } from "@lib/Interface";

// Req
interface Req
{
  uid: string;
}

// Clear Cart
export async function POST(req: NextRequest): Promise<NextResponse<string>>
{
  const client: MongoClient = await startClient();
  const collection: Collection<TheUser> = client.db("bookworm").collection<TheUser>("users");
  const { uid }: Req = await req.json();

  const x: Filter<TheUser> =
  {
    _id: uid
  };
  const y: UpdateFilter<TheUser> =
  {
    $set: { cart: [] }
  };

  await collection.updateOne(x, y);

  await client.close();

  return NextResponse.json("");
}