"use client";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import Loading from "../components/Loading";
import { Article } from "../types";

const BlogPage: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/articles");
        if (!res.ok) {
          throw new Error("No se pudo obtener los artículos");
        }
        const data: Article[] = await res.json();
        setArticles(
          data.map((a) => ({ ...a, _id: a._id?.toString() ?? "" }))
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
        console.error("Error al obtener los artículos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : (
        <PostList articles={articles} />
      )}
    </Layout>
  );
};

export default BlogPage;
