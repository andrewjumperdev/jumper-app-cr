'use client';
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const ServicesPage = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Jean Dupont", rating: 5, comment: "Excellent mentor ! J'ai énormément appris avec Andrew." },
    { id: 2, name: "Anonyme", rating: 4, comment: "Bon développeur, très pédagogue." },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });

  const handleReviewSubmit = () => {
    if (newReview.comment.trim() !== "") {
      setReviews([...reviews, { ...newReview, id: Date.now() }]);
      setNewReview({ name: "", rating: 5, comment: "" });
    }
  };

  return (
    <div className="container mt-20 mx-auto px-4 md:px-8 py-10">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-4xl font-bold text-center mb-6 text-blue-600"
      >
        Mes Services
      </motion.h1>
      
      <p className="text-lg text-center text-gray-300 mb-8 max-w-3xl mx-auto">
        Développeur Fullstack spécialisé en Next.js, React, TypeScript, Node.js, Firebase, MongoDB et plus. 
        J'offre des tutoriels personnalisés et un accompagnement sur vos projets.
      </p>
      
      <div className="flex justify-center mb-10">
        <Link 
          href="https://calendly.com/andrewjumperdev"
          className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Réserver un cours
        </Link>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Avis des clients</h2>
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-700 py-4">
            <div className="flex items-center mb-2">
              <span className="font-bold text-white">{review.name || "Anonyme"}</span>
              <div className="flex ml-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-300">{review.comment}</p>
          </div>
        ))}

        <div className="mt-6">
          <h3 className="text-xl font-bold text-white mb-2">Laisser un avis</h3>
          <input 
            type="text" 
            placeholder="Votre nom (facultatif)" 
            className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          />
          <textarea
            placeholder="Votre avis..."
            className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          ></textarea>
          <button 
            onClick={handleReviewSubmit} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
