"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../components/Modal";
import Image from "next/image";
import { AppDispatch, RootState } from "../store/store";
import { addReview, fetchReviews, Review } from "../store/reviewSlice";

const ServicesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { reviews, loading, error } = useSelector(
    (state: RootState) => state.reviews
  );
  const [newReview, setNewReview] = useState<Review>({
    name: "",
    rating: 5,
    comment: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const handleSubmit = async () => {
    try {
      if (reviews.some((review) => review.name === newReview.name)) {
        setErrorMessage("Vous avez déjà laissé un avis.");
        setModalOpen(true);
        return;
      }

      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(addReview(newReview));
        setSuccessMessage("Votre commentaire a été ajouté avec succès !");
        setModalOpen(true);
      } else {
        setErrorMessage(
          data.message || "Erreur lors de l'ajout du commentaire"
        );
        setModalOpen(true);
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage("Erreur de connexion");
      setModalOpen(true);
    }
  };

  return (
    <div className="container mt-20 mx-auto px-4 md:px-8 py-10">
      <div className="vh-100 mt-5 flex flex-col items-center justify-center p-6 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-6 text-blue-600"
        >
          **Transformez vos idées en réalité**
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Vous êtes à la recherche d&apos;un expert passionné pour créer des
            solutions de software sur mesure ? 🚀 Je suis Développeur Fullstack
            avec une expertise en{" "}
            <strong>Next.js, React, TypeScript, Node.js</strong>, et plus
            encore. Que vous ayez un projet d&apos;application web ou que vous ayez
            besoin de formation pour vous perfectionner, je suis là pour vous
            accompagner à chaque étape.
          </p>

          <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Ensemble, nous pouvons donner vie à vos idées et créer des projets
            qui se distinguent par leur performance et leur impact. Vous méritez
            un service exceptionnel, à la hauteur de vos ambitions. 🌟
          </p>

          <div className="flex justify-center mb-10">
            <Link
              href="https://calendly.com/aacpariscr/tutoria"
              className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer" 
            >
              **Réservez un cours personnalisé**
            </Link>
          </div>

          <div className="flex justify-center mb-10">
            <Link
              href="mailto:contact@votreemail.com"
              className="bg-gray-800 text-white font-bold px-8 py-4 rounded-lg shadow-md hover:bg-gray-700 transition-all transform hover:scale-105"
            >
              **Discutons de votre projet freelance**
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-6 cursor-pointer"
        >
          <FaChevronDown
            className="text-white text-3xl animate-bounce"
            onClick={() => {
              document.getElementById("leaveReviewSection")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </motion.div>
        <div id="leaveReviewSection" className="mt-8">
          <p className="text-center text-white">
            Vous voulez laisser un commentaire ? 👇
          </p>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold mb-4 text-white"
        >
          Avis des clients
        </motion.h2>
        {loading && <p className="text-white">Chargement...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {Array.isArray(reviews) && reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review._id || review.name + review.createdAt}
              className="border-b border-gray-700 py-4"
            >
              <div className="flex items-center mb-2">
                <Image
                  src="/img/icons/cat.png"
                  alt="Avatar"
                  width={100}
                  height={100}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-bold text-white">
                  {review.name || "Anonyme"}
                </span>
                <div className="flex ml-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-300">Aucun avis disponible.</p>
        )}

        <div className="mt-6 md:max-w-lg w-full bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-white mb-2 text-left">
            Laisser un avis
          </h3>
          <div className="mb-4 text-left">
            <label className="block text-white mb-2">Note</label>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`cursor-pointer ${
                    index < newReview.rating
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                  onClick={() =>
                    setNewReview({ ...newReview, rating: index + 1 })
                  }
                />
              ))}
            </div>
          </div>
          <input
            type="text"
            placeholder="Votre nom (facultatif)"
            className="w-full p-2 mb-2 rounded bg-gray-800 text-white text-left"
            value={newReview.name}
            onChange={(e) =>
              setNewReview({ ...newReview, name: e.target.value })
            }
          />
          <textarea
            placeholder="Votre avis..."
            className="w-full p-2 mb-2 rounded bg-gray-800 text-white text-left"
            value={newReview.comment}
            onChange={(e) =>
              setNewReview({ ...newReview, comment: e.target.value })
            }
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Envoyer
          </button>
        </div>
      </div>
      <Modal
        message={successMessage || errorMessage}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ServicesPage;
