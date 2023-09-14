import { MongoClient } from "mongodb";

// Start Client
async function startClient(): Promise<MongoClient>
{
  const client: MongoClient = await MongoClient.connect(process.env.DB!);

  return client;
}

export default startClient;