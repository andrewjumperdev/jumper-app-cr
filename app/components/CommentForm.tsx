import React, { useState } from 'react';

interface CommentFormProps {
  articleId: string;
  onCommentAdded: (comment: { text: string; createdAt: string; email: string }) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ articleId, onCommentAdded }) => {
  const [commentText, setCommentText] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    if (!commentText.trim()) return;
    if (!email.trim()) {
      setEmailError('Veuillez entrer votre adresse e-mail');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Veuillez entrer un e-mail valide');
      return;
    }
    const comment = {
      text: commentText,
      createdAt: new Date().toISOString(),
      email,
    };
    try {
      const res = await fetch(`/api/comments/${articleId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });
      if (res.ok) {
        onCommentAdded(comment);
        setCommentText('');
        setEmail('');
        setEmailError('');
      } else {
        console.error('Error al enviar el comentario');
      }
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  return (
    <div className="my-6 p-4 border-t border-gray-300">
      <h3 className="text-lg font-semibold">Laisser un commentaire</h3>
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Votre e-mail"
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md mt-2"
          placeholder="Ecrivez votre commentaire..."
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
