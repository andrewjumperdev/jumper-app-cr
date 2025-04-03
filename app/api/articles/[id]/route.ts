import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(req: Request, context: { params: { id: string } }) {
  const client = await clientPromise;
  const db = client.db("blog-andrewcr");

  try {
    const article = await db
      .collection("articles")
      .findOne({ _id: new ObjectId(context.params.id) });

    if (!article) {
      return NextResponse.json({ message: "Artículo no encontrado" }, { status: 404 });
    }

    return NextResponse.json(article, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error al obtener el artículo" }, { status: 500 });
  }
}