import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {

  const resolvedParams = await Promise.resolve(context.params);
  const { id } = resolvedParams;

  if (!ObjectId.isValid(id)) {
    return new NextResponse('Invalid ID', { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('blog-andrewcr');
    const article = await db
      .collection('articles')
      .findOne({ _id: new ObjectId(id) });

    if (!article) {
      return new NextResponse('Article not found', { status: 404 });
    }

    return new NextResponse(JSON.stringify(article), { status: 200 });
  } catch (error: any) {
    console.error('Database connection error:', error);
    return new NextResponse('Database error: ' + error.message, { status: 500 });
  }
}
