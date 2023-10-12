import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection, type Filter, type UpdateFilter, type UpdateResult } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type Res, type TheUser } from "@lib/Interface";

// Req
interface Req
{
  uid: string;
  bid: string;
}

// Cart
export async function POST(req: NextRequest): Promise<NextResponse<Res>>
{
  const client: MongoClient = await startClient();
  const collection: Collection<TheUser> = client.db("bookworm").collection<TheUser>("users");
  const { uid, bid }: Req = await req.json();

  const x: Filter<TheUser> =
  {
    _id: uid
  };
  const y: UpdateFilter<TheUser> =
  {
    $pull: { cart: { bid: bid } }
  };

  const result: UpdateResult<TheUser> = await collection.updateOne(x, y);

  await client.close();

  if (result.modifiedCount)
  {
    return NextResponse.json({ code: 100, message: "" });
  }
  else
  {
    return NextResponse.json({ code: 500, message: "" });
  }
}