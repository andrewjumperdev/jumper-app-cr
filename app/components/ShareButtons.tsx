'use client';

import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';

interface ShareButtonsProps {
  article: {
    title: string;
    summary: string;
    imageUrl?: string;
  };
}

const ShareButtons: React.FC<ShareButtonsProps & { article: any }> = ({ article }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tusitio.com';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;

  const encodedTitle = encodeURIComponent(article.title);
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedSummary = encodeURIComponent(article.summary);

  return (
    <div className="flex gap-4 justify-center mt-6">
      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-md shadow hover:opacity-90"
      >
        <Linkedin size={18} />
        LinkedIn
      </a>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-md shadow hover:opacity-90"
      >
        <Twitter size={18} />
        Twitter
      </a>
    </div>
  );
};

export default ShareButtons;
