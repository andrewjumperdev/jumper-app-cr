import React, { FC } from 'react';
import PostCard from './PostCard';
import { Article } from '../types';

interface PostListProps {
  articles: Article[];
}

const PostList: FC<PostListProps> = ({ articles }) => {
  if (!articles.length) {
    return <p className="text-center text-gray-600">No hay artículos disponibles.</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <PostCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default PostList;