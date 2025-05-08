"use client";
import React from "react";

const NUM_SKELETONS = 6;

const BlogLoading: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {Array.from({ length: NUM_SKELETONS }).map((_, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-2xl p-4 shadow-lg animate-pulse bg-white"
        >

          <div className="h-40 bg-gray-200 rounded-md mb-4" />

          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />

          <div className="h-4 bg-gray-200 rounded w-full mb-2" />

          <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />

          <div className="h-8 bg-gray-200 rounded w-1/3 mt-4" />
        </div>
      ))}
    </div>
  );
};

export default BlogLoading;
