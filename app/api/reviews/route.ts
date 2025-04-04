import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const reviews = await db.collection("reviews").find().toArray();

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ message: "Erreur serveur", error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Obtener los datos del cuerpo de la solicitud
    const { name, rating, comment } = await request.json();

    // Validar los datos (opcional, puedes agregar más validaciones)
    if (!name || !rating || !comment) {
      return NextResponse.json({ message: "Tous les champs sont obligatoires." }, { status: 400 });
    }

    // Crear un objeto de reseña
    const newReview = {
      name,
      rating,
      comment,
      createdAt: new Date(),
    };

    // Insertar el nuevo comentario en la base de datos
    const result = await db.collection("reviews").insertOne(newReview);

    // Devolver la respuesta con el ID del documento insertado
    return NextResponse.json(
      { message: "Commentaire ajouté avec succès", review: { ...newReview, _id: result.insertedId } },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erreur serveur", error }, { status: 500 });
  }
}