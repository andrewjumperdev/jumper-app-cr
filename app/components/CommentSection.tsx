import React, { FC, useEffect, useState, FormEvent } from 'react';

interface Comment {
  _id: string;
  content: string;
  createdAt: string;
}

interface CommentSectionProps {
  articleId: string;
}

const CommentSection: FC<CommentSectionProps> = ({ articleId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/articles/${articleId}/comments`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        } else {
          throw new Error('No se pudieron obtener los comentarios');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      }
    };

    fetchComments();
  }, [articleId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/articles/${articleId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment }),
      });
      if (res.ok) {
        const comment = await res.json();
        setComments((prev) => [comment, ...prev]);
        setNewComment('');
      } else {
        throw new Error('Error al publicar el comentario');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">Comentarios</h3>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe tu comentario..."
          className="w-full p-3 border rounded-md"
          required
        />
        <button type="submit" className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Publicar
        </button>
      </form>
      <div>
        {comments.length === 0 ? (
          <p className="text-gray-600">Sé el primero en comentar.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="mb-4 p-4 border rounded-md">
              <p className="text-gray-800">{comment.content}</p>
              <span className="text-gray-500 text-sm">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;