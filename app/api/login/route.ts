import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import clientPromise from "@/app/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const client = await clientPromise;
    const db = client.db("blog-andrewcr");

    const user = await db.collection("users").findOne({ username });
    
    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    return res.status(200).json({ message: "Autenticación exitosa" });
  }
  res.status(405).end();
}
