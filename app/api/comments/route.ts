import clientPromise from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('blog-andrewcr');
    const comments = await db.collection('comments').find().toArray();
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error al obtener comentarios' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('blog-andrewcr');
    const { content, articleId, email, createdAt } = await req.json();
    if (!content || !articleId) {
      return NextResponse.json({ message: 'Faltan datos' }, { status: 400 });
    }
    const newComment = { content, articleId, email, createdAt: createdAt || new Date() };
    const result = await db.collection('comments').insertOne(newComment);
    return NextResponse.json({ ...newComment, _id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error al agregar comentario' }, { status: 500 });
  }
}