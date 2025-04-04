import { NextResponse } from 'next/server';
import { ObjectId } from "mongodb";
import clientPromise from '../../../lib/mongodb';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  // Asegúrate de acceder al parámetro después de que haya sido completamente resuelto
  const { id } = params;

  // Conexión a la base de datos
  const client = await clientPromise;
  const db = client.db("blog-andrewcr");

  // Validar si el id es válido
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    // Buscar el artículo usando el ObjectId
    const article = await db
      .collection("articles")
      .findOne({ _id: new ObjectId(id) });

    // Si no se encuentra el artículo, devuelve un error 404
    if (!article) {
      return NextResponse.json({ message: "Artículo no encontrado" }, { status: 404 });
    }

    // Si se encuentra el artículo, lo retorna con un código 200
    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    console.error("Error al obtener el artículo:", error);
    return NextResponse.json({ message: "Error al obtener el artículo" }, { status: 500 });
  }
}


export async function POST(req: Request, { params }: { params: { articleId: string } }) {
  const { articleId } = params;
  const { text, createdAt, email } = await req.json();

  if (!text || !createdAt) {
    return NextResponse.json({ error: 'Faltan datos en el comentario' }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db('blog-andrewcr');

  const newComment = {
    text,
    articleId,
    email,
    createdAt: new Date(createdAt),
  };

  const result = await db.collection('comments').insertOne(newComment);

  return NextResponse.json({ message: 'Comentario agregado correctamente', comment: { ...newComment, _id: result.insertedId } });
}

