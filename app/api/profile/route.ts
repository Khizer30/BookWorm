import { NextResponse, type NextRequest } from "next/server";
import { type MongoClient, type Collection, type Filter, type UpdateFilter, type UpdateResult } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type TheUser } from "@lib/Interface";

// Profile
export async function POST(req: NextRequest)
{
  const client: MongoClient = await startClient();
  const collection: Collection<TheUser> = client.db("bookworm").collection<TheUser>("users");
  const user: TheUser = await req.json();

  const x: Filter<TheUser> = { _id: user._id };
  const y: UpdateFilter<TheUser> =
  {
    $set:
    {
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      address: user.address,
      city: user.city
    }
  };

  const result: UpdateResult<TheUser> = await collection.updateOne(x, y);

  await client.close();

  if (result.modifiedCount)
  {
    return NextResponse.json({ code: 100, message: "User Updated" });
  }
  else
  {
    return NextResponse.json({ code: 500, message: "An Error Occurred, Please Try Later" });
  }
}