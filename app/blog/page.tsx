'use client';
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Article } from '@/app/types';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const BlogPage: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/articles');
        if (res.ok) {
          const data: Article[] = await res.json();
          // Convertir _id a string si es un ObjectId de MongoDB
          const formattedArticles = data.map(article => ({
            ...article,
            _id: article._id.toString(),  // Asegúrate de convertir _id a string
          }));
          setArticles(formattedArticles);
        } else {
          throw new Error('No se pudo obtener los artículos');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        console.error('Error al obtener los artículos:', err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Blog</h1>
      {error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : (
        <PostList articles={articles} />
      )}
    </Layout>
  );
};

export default BlogPage;
