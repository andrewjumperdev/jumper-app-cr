import React, { useEffect, useState } from 'react';
import { Article } from '@/app/types';
import { markdownToHtml } from '@/app/lib/markdownToHtml';
import CommentSection from './CommentSection';
import CommentForm from './CommentForm'; 

interface PostDetailProps {
  article: Article;
}

const PostDetail: React.FC<PostDetailProps> = ({ article }) => {
  const [contentHtml, setContentHtml] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const convertMarkdown = async () => {
      const htmlContent = await markdownToHtml(article.content);
      setContentHtml(htmlContent);
    };

    convertMarkdown();
  }, [article.content]);

  const handleCommentAdded = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments/${article._id}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data.comments);
        }
      } catch (err) {
        console.error('Error al obtener los comentarios:', err);
      }
    };

    fetchComments();
  }, [article._id]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">{article.title}</h1>

      <div className="text-center text-gray-500 mb-4">
        <p><strong>Date de publication :</strong> {new Date(article.createdAt).toLocaleDateString()}</p>
        <p><strong>Catégorie :</strong> {article.category}</p>
        <p><strong>État :</strong> {article.status}</p>
      </div>

      {article.imageUrl && (
        <div className="text-center mb-6">
          <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-60 object-cover rounded-lg" />
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Résumé :</h2>
        <p className="text-gray-700">{article.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Contenu :</h2>
        {/* Renderiza el contenido HTML */}
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
      </div>
       <CommentForm articleId={article._id} onCommentAdded={handleCommentAdded} />
    </div>
  );
};

export default PostDetail;
