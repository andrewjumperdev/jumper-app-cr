'use client';
import { useState } from "react";

export default function PostArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, password }),
    });

    const data = await res.json();

    if (res.status === 201) {
      setMessage("Artículo publicado exitosamente!");
      setTitle("");
      setContent("");
      setPassword("");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Publicar Artículo</h1>
      {message && <div className="text-green-500 mt-2">{message}</div>}
      {error && <div className="text-red-500 mt-2">{error}</div>}

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          rows={5}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}
