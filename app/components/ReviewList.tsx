'use client';
import React from 'react';

type Review = {
  name: string;
  rating: number;
  comment: string;
};

const ReviewList: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Avis des clients</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-400">Aucun avis pour le moment.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="font-semibold">{review.name || 'Anonyme'}</p>
              <p className="text-yellow-400">{'⭐'.repeat(review.rating)}</p>
              <p className="text-gray-300">{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;