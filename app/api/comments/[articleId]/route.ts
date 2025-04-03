import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET(req: Request, { params }: { params: { articleId: string } }) {
  const { articleId } = params;
  const client = await clientPromise;
  const db = client.db('blog-andrewcr');

  const comments = await db.collection('comments').find({ articleId }).toArray();

  return NextResponse.json({ comments });
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

