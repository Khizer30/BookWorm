import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection, type Filter, type UpdateFilter } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type Res, type TheUser, type Product } from "@lib/Interface";

// Product
export async function POST(req: NextRequest): Promise<NextResponse<Res>>
{
  const client: MongoClient = await startClient();
  const collection: Collection<TheUser> = client.db("bookworm").collection<TheUser>("users");
  const { uid, bid, title, quantity }: Product = await req.json();

  let x: Filter<TheUser> =
  {
    _id: uid,
    "cart.bid": bid
  };
  let y: UpdateFilter<TheUser> =
  {
    $set:
    {
      "cart.$.quantity": quantity
    }
  };

  const result = await collection.updateOne(x, y);

  if (!result.modifiedCount)
  {
    x =
    {
      _id: uid
    };
    y =
    {
      $addToSet:
      {
        cart:
        {
          bid: bid,
          quantity: quantity
        }
      }
    };

    await collection.updateOne(x, y);
  }

  await client.close();

  return NextResponse.json({ code: 100, message: `x${ quantity } ${ title }` });
}