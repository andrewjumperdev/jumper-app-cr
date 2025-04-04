'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Importamos `useParams` de next/navigation
import { NextPage } from 'next';
import { Article } from '../../types';
import PostDetail from '../../components/PostDetail';

const PostDetailPage: NextPage = () => {
  const { id } = useParams(); // Usamos `useParams` para obtener el id de la URL
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return; // Verificamos si el id está disponible

    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/articles/${id}`);
        if (!res.ok) {
          throw new Error('No se pudo obtener el artículo');
        }
        const data: Article = await res.json();
        setArticle(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]); // Dependencia de `id`, se ejecuta cuando cambia el id

  if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!article) return <p className="text-center text-gray-500">Artículo no encontrado</p>;

  return <PostDetail article={article} />;
};

export default PostDetailPage;
