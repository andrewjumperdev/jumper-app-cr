import { NextResponse, NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

interface RouteContext {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = context.params;
  try {
    const client = await clientPromise;
    const db = client.db("blog-andrewcr");
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
