'use client';
import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import Image from 'next/image';
import { Article, Comment  } from '../types';
import { markdownToHtml } from '../lib/markdownToHtml';

interface PostDetailProps {
  article: Article;
}

const PostDetail: React.FC<PostDetailProps> = ({ article }) => {
  const [contentHtml, setContentHtml] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState<boolean>(true);
  const [errorComments, setErrorComments] = useState<string | null>(null);

  useEffect(() => {
    const convertMarkdown = async () => {
      const htmlContent = await markdownToHtml(article.content);
      setContentHtml(htmlContent);
    };
    convertMarkdown();
  }, [article.content]);

  useEffect(() => {
    if (!article?._id) {
      console.error("article._id no está definido:", article);
      setErrorComments("ID del artículo no válido");
      setLoadingComments(false);
      return;
    }

    console.log("Fetching comments para articleId:", article._id);
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments/${article._id}`);
        if (!res.ok) {
          throw new Error('No se pudieron cargar los comentarios');
        }
        const data = await res.json();
        console.log("Comentarios recibidos:", data);
        const commentsArray = Array.isArray(data) ? data : data.comments || [];
        setComments(commentsArray);
      } catch (err) {
        console.error('Error al obtener los comentarios:', err);
        setErrorComments(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoadingComments(false);
      }
    };

    fetchComments();
  }, [article._id]);

  const handleCommentAdded = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-4 mt-28">{article.title}</h1>

      <div className="text-center text-gray-500 mb-4">
        <p><strong>Date de publication :</strong> {new Date(article.createdAt).toLocaleDateString()}</p>
        <p><strong>Catégorie :</strong> {article.category}</p>
        <p><strong>État :</strong> {article.status}</p>
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
        <h2 className="text-xl font-semibold text-gray-800">Résumé :</h2>
        <p className="text-gray-700">{article.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Contenu :</h2>
        <div className="prose text-gray-700 overflow-auto" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>

      {article.tags && article.tags.length > 0 && (
        <div className="mb-6 mt-28">
          <h2 className="text-xl font-semibold text-gray-800">Étiquettes :</h2>
          <ul className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <li key={index} className="bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-700 shadow-xl/20">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Commentaires:</h2>
        {loadingComments ? (
          <p className="text-gray-500">Cargando comentarios...</p>
        ) : errorComments ? (
          <p className="text-red-500">{errorComments}</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-500">No hay comentarios aún.</p>
        ) : (
          <div className="space-y-4 mt-4">
            {comments.map((comment, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-800">{comment.text}</p>
                <span className="text-sm text-gray-500">
                  Publié le {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {article._id && <CommentForm articleId={article._id} onCommentAdded={handleCommentAdded} />}
    </div>
  );
};

export default PostDetail;