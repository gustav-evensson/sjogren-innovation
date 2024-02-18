import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URL || "";
const DB_NAME = "test";

let cachedClient: any = null;

export async function getMongoDB() {
  if (cachedClient) {
    await cachedClient.connect();
    return cachedClient.db(DB_NAME);
  }
  try {
    const client = new MongoClient(URI);
    cachedClient = client;
    await client.connect();
    return client.db(DB_NAME);
  } catch (e) {
    console.error(e);
    return null;
  }
}