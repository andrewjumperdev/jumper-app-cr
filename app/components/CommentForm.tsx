'use client';
import React, { useState } from 'react';
import { Comment } from '../types';


interface CommentFormProps {
  articleId: string;
  onCommentAdded: (comment: Comment) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ articleId, onCommentAdded }) => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text || !email) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const newComment = {
      text,
      email,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(`/api/comments/${articleId}`, { // Ruta dinámica
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment),
      });

      if (!res.ok) {
        throw new Error('No se pudo agregar el comentario');
      }

      const data = await res.json();
      onCommentAdded(data.comment); // Ajusta según la respuesta de la API
      setText('');
      setEmail('');
    } catch (err) {
      console.error('Error al enviar el comentario:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800">Agregar un comentario</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu comentario aquí"
        className="w-full p-2 mt-2 border rounded-lg"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu correo electrónico"
        className="w-full p-2 mt-2 border rounded-lg"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Enviar
      </button>
    </form>
  );
};

export default CommentForm;