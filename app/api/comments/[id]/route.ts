import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  // Esperamos a que se resuelvan los parámetros
  const { id } = await params;

  if (!id || id === 'undefined') {
    return NextResponse.json({ error: 'id es requerido' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('blog-andrewcr');
    const comments = await db.collection('comments').find({ articleId: id }).toArray();
    return NextResponse.json({ comments });
  } catch (error) {
    console.error("Error al obtener comentarios:", error);
    return NextResponse.json({ error: 'Error al obtener comentarios' }, { status: 500 });
  }
}


export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id || id === 'undefined') {
    return NextResponse.json({ error: 'id es requerido' }, { status: 400 });
  }

  const { text, createdAt, email } = await req.json();

  if (!text || !createdAt) {
    return NextResponse.json({ error: 'Faltan datos en el comentario' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('blog-andrewcr');
    // Aquí guardamos el id en el campo "articleId"
    const newComment = { text, articleId: id, email, createdAt: new Date(createdAt) };
    const result = await db.collection('comments').insertOne(newComment);

    return NextResponse.json({
      message: 'Comentario agregado correctamente',
      comment: { ...newComment, _id: result.insertedId },
    });
  } catch (error) {
    console.error("Error al agregar comentario:", error);
    return NextResponse.json({ error: 'Error al agregar comentario' }, { status: 500 });
  }
}
