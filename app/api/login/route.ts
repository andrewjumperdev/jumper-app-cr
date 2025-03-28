import clientPromise from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
  const client = await clientPromise
  const db = client.db('blog-andrewcr')

  const { email, password } = await req.json()
  if (!email || !password) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 })
  }

  const user = await db.collection('users').findOne({ email })
  if (!user) {
    return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 })
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    return NextResponse.json({ message: 'Contraseña incorrecta' }, { status: 401 })
  }

  const token = jwt.sign({ uid: user._id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  })

  return NextResponse.json({ token }, { status: 200 })
}
