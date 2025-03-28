import clientPromise from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
  const client = await clientPromise
  const db = client.db('blog-andrewcr')

  const comments = await db.collection('comments').find().toArray()
  return NextResponse.json(comments, { status: 200 })
}

export async function POST(req: Request) {
  const client = await clientPromise
  const db = client.db('blog-andrewcr')

  const { content, articleId } = await req.json()
  if (!content || !articleId) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 })
  }

  const newComment = { content, articleId, createdAt: new Date() }
  const result = await db.collection('comments').insertOne(newComment)

  return NextResponse.json({ ...newComment, _id: result.insertedId }, { status: 201 })
}
