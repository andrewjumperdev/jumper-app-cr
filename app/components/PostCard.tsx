import React, { FC } from 'react';
import { Article } from '@/app/types';

interface PostCardProps {
  article: Article;
}

const PostCard: FC<PostCardProps> = ({ article }) => {
  const imageUrl = (article as any).imageUrl || '/placeholder-image.jpg';

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{article.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-4">
          {article.content}
        </p>
      </div>
      <div className="bg-gray-100 p-4 flex flex-col md:flex-row justify-between items-start md:items-center mt-auto">
        <span className="text-gray-500 text-sm">
          {new Date(article.createdAt).toLocaleDateString()}
        </span>
        <a
          href={`/blog/${article._id}`}
          className="mt-2 md:mt-0 text-blue-600 hover:underline text-sm font-medium"
        >
          Leer más →
        </a>
      </div>
    </div>
  );
};

export default PostCard;
