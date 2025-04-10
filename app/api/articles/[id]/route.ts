
import { NextResponse, NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db("blog-andrewcr");
    const { id } = params;
    const article = await db.collection("articles").findOne({ _id: new ObjectId(id) });
    if (!article) {
      return NextResponse.json({ message: "Artículo no encontrado" }, { status: 404 });
    }
    return NextResponse.json({ ...article, _id: article._id.toString() }, { status: 200 });
  } catch (error) {
    console.error("Error fetching article:", error);
    return NextResponse.json({ message: "Error fetching article" }, { status: 500 });
  }
}