import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection, type Filter, type UpdateFilter } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type TheUser, type Product } from "@lib/Interface";

// Product
export async function POST(req: NextRequest)
{
  const client: MongoClient = await startClient();
  const collection: Collection<TheUser> = client.db("bookworm").collection<TheUser>("users");
  const item: Product = await req.json();

  let x: Filter<TheUser> =
  {
    _id: item.uid,
    "cart.bid": item.bid
  };
  let y: UpdateFilter<TheUser> =
  {
    $set:
    {
      "cart.$.quantity": item.quantity
    }
  };

  const result = await collection.updateOne(x, y);

  if (!result.modifiedCount)
  {
    x =
    {
      _id: item.uid
    };
    y =
    {
      $addToSet:
      {
        cart:
        {
          bid: item.bid,
          quantity: item.quantity
        }
      }
    };

    await collection.updateOne(x, y);
  }

  await client.close();

  return NextResponse.json({ code: 100, message: `x${ item.quantity } ${ item.title }` });
}