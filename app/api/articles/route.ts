import clientPromise from '@/app/lib/mongodb'
import { Article } from '@/app/types'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const client = await clientPromise
  const db = client.db('blog-andrewcr')

  const { searchParams } = new URL(req.url)
  const titleSearch = searchParams.get('search') || ''
  const query = titleSearch ? { title: { $regex: titleSearch, $options: 'i' } } : {}

  const articles: Article[] = await db.collection<Article>('articles').find(query).toArray()
  return NextResponse.json(articles, { status: 200 })
}

export async function POST(req: Request) {
  const client = await clientPromise
  const db = client.db('blog-andrewcr')

  const { title, content }: Article = await req.json()
  if (!title || !content) {
    return NextResponse.json({ message: 'Faltan datos del artículo' }, { status: 400 })
  }

  const newArticle = { title, content, createdAt: new Date() }
  const result = await db.collection<Article>('articles').insertOne(newArticle)

  return NextResponse.json({ ...newArticle, _id: result.insertedId }, { status: 201 })
}
