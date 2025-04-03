'use client';
import React, { useState, FormEvent } from 'react';
import { NextPage } from 'next';
import Layout from '@/app/components/Layout';

const categories = ['JavaScript', 'Python', 'Inteligencia Artificial', 'Otros'];

const CreatePostPage: NextPage = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [imageUrl, setImageUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, category, imageUrl, summary, content, tags: tags.split(','), status }),
      });
      if (res.ok) {
        setMessage('✅ ¡Post creado exitosamente!');
        setTitle('');
        setCategory(categories[0]);
        setImageUrl('');
        setSummary('');
        setContent('');
        setTags('');
        setStatus('draft');
      } else {
        throw new Error('❌ Error al crear el post');
      }
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">📝 Crear un Nuevo Post</h1>
        {message && <p className="mb-4 text-green-600">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Título */}
          <div>
            <label className="block text-gray-700 font-medium">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Categoría */}
          <div>
            <label className="block text-gray-700 font-medium">Categoría</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded p-2 bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Imagen */}
          <div>
            <label className="block text-gray-700 font-medium">Imagen destacada (URL)</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Resumen */}
          <div>
            <label className="block text-gray-700 font-medium">Resumen breve</label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Contenido */}
          <div>
            <label className="block text-gray-700 font-medium">Contenido del post (Markdown soportado)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded p-2 h-32"
              required
            />
          </div>

          {/* Etiquetas */}
          <div>
            <label className="block text-gray-700 font-medium">Etiquetas (separadas por coma)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Estado */}
          <div>
            <label className="block text-gray-700 font-medium">Estado</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
              className="w-full border rounded p-2 bg-white"
            >
              <option value="draft">Borrador</option>
              <option value="published">Publicado</option>
            </select>
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
          >
            🚀 Crear Post
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePostPage;
