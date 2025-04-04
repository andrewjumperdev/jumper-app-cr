import { ObjectId } from 'mongodb';
import { notFound } from 'next/navigation';
import clientPromise from '../../lib/mongodb';
import { Article } from '../../types';
import PostDetail from '../../components/PostDetail';

interface PageProps {
  params: { id: string }
}

export default async function Page({ params }: PageProps) {
  // Forzamos a esperar los parámetros antes de acceder a ellos
  const resolvedParams = await Promise.resolve(params);
  const { id } = resolvedParams;

  if (!ObjectId.isValid(id)) {
    notFound();
  }

  try {
    const client = await clientPromise;
    const db = client.db('blog-andrewcr');
    const article = await db.collection('articles').findOne({ _id: new ObjectId(id) });

    if (!article) {
      notFound();
    }

    const articleSerialized: Article = JSON.parse(JSON.stringify(article));

    return <PostDetail article={articleSerialized} />;
  } catch (error) {
    console.error(error);
    notFound();
  }
}