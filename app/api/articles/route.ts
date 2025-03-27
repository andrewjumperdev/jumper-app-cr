import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'
import { Article } from '../../types'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise
  const db = client.db('blog-andrewcr')

  if (req.method === 'GET') {
    const { search } = req.query
    const titleSearch = typeof search === 'string' ? search : Array.isArray(search) ? search[0] : ''
    const query = titleSearch ? { title: { $regex: titleSearch, $options: 'i' } } : {}
    
    const articles: Article[] = await db
      .collection<Article>('articles')
      .find(query)
      .toArray()
    return res.status(200).json(articles)
  }

  if (req.method === 'POST') {
    const { title, content } = req.body as Article
    if (!title || !content) {
      return res.status(400).json({ message: 'Faltan datos del artículo' })
    }
    const newArticle = { title, content, createdAt: new Date() }
    const result = await db.collection<Article>('articles').insertOne(newArticle)
    return res.status(201).json({ ...newArticle, _id: result.insertedId })
  }

  res.status(405).end()
}
