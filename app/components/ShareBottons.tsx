'use client';
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaLink } from 'react-icons/fa';
import Modal from './Modal'; // Asegurate que esté en el mismo nivel o ajustá el path
import { Article } from '../types';

const ShareButtons = ({ article }: { article: Article }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(article.title);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setModalOpen(true);
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <p className="text-lg font-semibold">Partager cet article :</p>

      <div className="flex gap-4">
        {/* <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
          title="Partager sur Facebook"
        >
          <FaFacebook size={24} />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
          title="Partager sur Twitter"
        >
          <FaTwitter size={24} />
        </a> */}
{/* 
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
          title="Partager sur LinkedIn"
        >
          <FaLinkedin size={24} />
        </a> */}

        {/* <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-800"
          title="Partager sur WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a> */}

        <button
          onClick={handleCopy}
          className="text-gray-600 hover:text-gray-900"
          title="Copier le lien"
        >
          <FaLink size={24} />
        </button>
      </div>

      {/* Modal */}
      <Modal
        message="Lien copié dans le presse-papiers!"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ShareButtons;
