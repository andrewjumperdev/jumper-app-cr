'use client';
import { useEffect, useState } from 'react';
import { Article } from '@/app/types/';

const BlogPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/articles');
        if (res.ok) {
          const data = await res.json();
          setArticles(data);
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
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Blog</h1>

      {error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : articles.length === 0 ? (
        <p className="text-center text-gray-600">No hay artículos disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-4">{article.content}</p>
              </div>
              <div className="bg-gray-100 p-4">
                <span className="text-gray-500 text-sm">
                  {new Date(article.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
