'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { usePathname, useSearchParams } from 'next/navigation';
import CommentForm from './CommentForm';
import Image from 'next/image';
import { Article, Comment } from '../types';
import ShareButtons from './ShareButtons';
import { markdownToHtml } from '../lib/markdownToHtml';

interface PostDetailProps {
  article: Article;
}

const PostDetail: React.FC<PostDetailProps> = ({ article }) => {
  // Navigation hooks for URL building
  const pathname = usePathname() || '';
  const searchParams = useSearchParams();
  const queryString = searchParams ? searchParams.toString() : '';
  const path = queryString ? `${pathname}?${queryString}` : pathname;

  // Full URL for sharing/meta tags
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tusitio.com';
  const fullUrl = `${siteUrl}${path}`;

  const [contentHtml, setContentHtml] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState<boolean>(true);
  const [errorComments, setErrorComments] = useState<string | null>(null);

  // Convert Markdown to HTML
  useEffect(() => {
    markdownToHtml(article.content).then(html => setContentHtml(html));
  }, [article.content]);

  // Fetch comments
  useEffect(() => {
    if (!article._id) {
      setErrorComments('ID de artículo no válido');
      setLoadingComments(false);
      return;
    }

    fetch(`/api/comments/${article._id}`)
      .then(res => {
        if (!res.ok) throw new Error('Error cargando comentarios');
        return res.json();
      })
      .then(data => setComments(Array.isArray(data) ? data : data.comments))
      .catch(err => setErrorComments(err.message))
      .finally(() => setLoadingComments(false));
  }, [article._id]);

  const handleCommentAdded = (comment: Comment) => {
    setComments(prev => [...prev, comment]);
  };

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.summary} />

        {/* Open Graph tags */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        {article.imageUrl && <meta property="og:image" content={article.imageUrl} />}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.summary} />
        {article.imageUrl && <meta name="twitter:image" content={article.imageUrl} />}
      </Head>

      <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4 mt-28">
          {article.title}
        </h1>

        <div className="text-center text-gray-500 mb-4">
          <p><strong>Fecha de publicación:</strong> {new Date(article.createdAt).toLocaleDateString()}</p>
          <p><strong>Categoría:</strong> {article.category}</p>
          <p><strong>Estado:</strong> {article.status}</p>
        </div>

        {article.imageUrl && (
          <div className="text-center mb-6">
            <Image
              width={1000}
              height={1000}
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-auto max-h-60 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Resumen:</h2>
          <p className="text-gray-700">{article.summary}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Contenido:</h2>
          <div
            className="prose text-gray-700 overflow-auto"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        <ShareButtons article={article} />

        {article.tags?.length > 0 && (
          <div className="mb-6 mt-28">
            <h2 className="text-xl font-semibold text-gray-800">Etiquetas:</h2>
            <ul className="flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <li
                  key={idx}
                  className="bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-700 shadow-xl/20"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Comentarios:</h2>
          {loadingComments ? (
            <p className="text-gray-500">Cargando comentarios...</p>
          ) : errorComments ? (
            <p className="text-red-500">{errorComments}</p>
          ) : comments.length === 0 ? (
            <p className="text-gray-500">No hay comentarios aún.</p>
          ) : (
            <div className="space-y-4 mt-4">
              {comments.map((comment, idx) => (
                <div key={idx} className="p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-800">{comment.text}</p>
                  <span className="text-sm text-gray-500">
                    Publicado el {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {article._id && (
          <CommentForm articleId={article._id} onCommentAdded={handleCommentAdded} />
        )}
      </div>
    </>
  );
};

export default PostDetail;
