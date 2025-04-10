'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { NextPage } from 'next';
import { Article } from '@/app/types';
import PostDetail from '@/app/components/PostDetail';

const PostDetailPage: NextPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("ID desde useParams:", id);
    if (!id) {
      console.error("No se encontró id en la URL");
      setError("ID no proporcionado");
      setLoading(false);
      return;
    }

    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/articles/${id}`);
        if (!res.ok) {
          throw new Error('No se pudo obtener el artículo');
        }
        const data: Article = await res.json();
        console.log("Artículo cargado:", data);
        if (!data._id) {
          throw new Error('El artículo no tiene un _id válido');
        }
        setArticle(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!article) return <p className="text-center text-gray-500">Artículo no encontrado</p>;

  return <PostDetail article={article} />;
};

export default PostDetailPage;