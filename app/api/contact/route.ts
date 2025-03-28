import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function POST(req: Request) {
  try {
    console.log("📡 Intentando conectar con MongoDB...");
    const client = await clientPromise;
    console.log("✅ Cliente MongoDB obtenido correctamente");

    const db = client.db("tu_base_de_datos");
    console.log("✅ Base de datos seleccionada:", db.databaseName);

    const body = await req.json();
    console.log("📝 Datos recibidos:", body);

    if (!body.name || !body.email || !body.phone || !body.message) {
      console.log("❌ Faltan campos:", body);
      return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
    }

    const result = await db.collection("contacts").insertOne({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      createdAt: new Date(),
    });

    console.log("✅ Mensaje guardado en la base de datos", result);

    return NextResponse.json({ message: "Mensaje guardado" }, { status: 200 });
  } catch (error: unknown) {
    let errorMessage = "Error en el servidor";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error("❌ Error en el servidor:", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
