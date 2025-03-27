import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("⚠️ No se encontró MONGODB_URI en .env.local");

const options = {};
let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    console.log("📡 Conectando a MongoDB...");
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  console.log("🚀 Conectando a MongoDB en producción...");
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
