import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'
import { Comment } from '../../types'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise
  const db = client.db('tuBaseDeDatos')

  if (req.method === 'GET') {
    const { articleId } = req.query
    if (!articleId || typeof articleId !== 'string') {
      return res.status(400).json({ message: 'Falta el ID del artículo' })
    }
    const comments: Comment[] = await db.collection<Comment>('comments').find({ articleId }).toArray();
    return res.status(200).json(comments)
  }

  if (req.method === 'POST') {
    const { articleId, author, message } = req.body as Comment
    if (!articleId || !author || !message) {
      return res.status(400).json({ message: 'Faltan datos del comentario' })
    }
    const newComment = { articleId, author, message, createdAt: new Date() }
    const result = await db.collection('comments').insertOne(newComment)
    return res.status(201).json({ ...newComment, _id: result.insertedId })
  }

  res.status(405).end()
}