import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';
import { NextRequest } from 'next/server';

// La ruta es dinámica, así que debes usar el método correcto para obtener los params
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }  // Obtenemos los parámetros de la URL
) {
  // Esperar que se resuelvan los params antes de acceder a sus propiedades
  const { id } = await params;  // Asegurándote de que `params` esté completamente resuelto

  // Validación del ID
  if (!ObjectId.isValid(id)) {
    return new Response('Invalid ID', { status: 400 });
  }

  try {
    // Conexión a la base de datos
    const client = await clientPromise;
    const db = client.db('blog-andrewcr');
    
    // Buscar el artículo en la base de datos
    const article = await db
      .collection('articles')
      .findOne({ _id: new ObjectId(id) });

    // Verificar si el artículo existe
    if (!article) {
      return new Response('Article not found', { status: 404 });
    }

    // Devolver el artículo como respuesta
    return new Response(JSON.stringify(article), { status: 200 });
  } catch (error: any) {
    console.error('Database connection error:', error);
    return new Response('Database error: ' + error.message, { status: 500 });
  }
}
