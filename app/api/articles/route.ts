import clientPromise from "@/app/lib/mongodb";
import { Article } from "@/app/types";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Asegúrate de importar ObjectId

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("blog-andrewcr");

    // Obtener los artículos de la base de datos
    const articles = await db.collection("articles").find().toArray();

    // Convertir los objetos ObjectId a string para poder enviarlos en el JSON
    const formattedArticles = articles.map((article) => ({
      ...article,
      _id: article._id.toString(),
    }));

    // Devolver los artículos como respuesta
    return NextResponse.json(formattedArticles, { status: 200 });

  } catch (error: any) {
    console.error("🚨 Error en el servidor:", error);
    return NextResponse.json({ message: "🚨 Error al obtener los artículos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("blog-andrewcr");

    const body = await req.json();
    const { title, category, imageUrl, summary, content, tags, status }: Article = body;

    // Verificar que los datos obligatorios estén presentes
    if (!title || !category || !summary || !content || !status) {
      return NextResponse.json({ message: "❌ Faltan datos obligatorios" }, { status: 400 });
    }

    // Asegurarse de que `tags` es un string antes de usar `split`
    const tagsArray: string[] = typeof tags === "string"
      ? tags.split(',').map((tag: string) => tag.trim()) // Si es un string, dividir por coma
      : tags || []; // Si `tags` no es un string, usar el valor original (suponiendo que es un array)

    // Validar que el estado sea correcto
    if (status !== 'draft' && status !== 'published') {
      return NextResponse.json({ message: "❌ El estado debe ser 'draft' o 'published'" }, { status: 400 });
    }

    // Crear el nuevo artículo sin incluir el _id, ya que lo genera MongoDB
    const newArticle: Omit<Article, '_id'> = {
      title,
      category,
      imageUrl: imageUrl || "",
      summary,
      content,
      tags: tagsArray,
      status,
      createdAt: new Date(),
    };

    // Insertar el artículo en la base de datos
    const result = await db.collection("articles").insertOne(newArticle);

    // Devolver el artículo creado con el nuevo _id generado por MongoDB
    return NextResponse.json({ ...newArticle, _id: result.insertedId.toString() }, { status: 201 });

  } catch (error: any) {
    console.error("🚨 Error en el servidor:", error);
    return NextResponse.json({ message: "🚨 Error en el servidor" }, { status: 500 });
  }
}
