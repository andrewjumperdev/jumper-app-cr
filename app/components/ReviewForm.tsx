'use client';
import React, { useState } from 'react';

type Review = {
  name: string;
  rating: number;
  comment: string;
};

const ReviewForm: React.FC<{ onAddReview: (review: Review) => void }> = ({ onAddReview }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReview({ name, rating, comment });
    setName('');
    setRating(5);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Laissez votre avis</h3>
      <input
        type="text"
        placeholder="Votre nom (ou anonyme)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>{star} ⭐</option>
        ))}
      </select>
      <textarea
        placeholder="Votre commentaire"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full">
        Envoyer
      </button>
    </form>
  );
};

export default ReviewForm;