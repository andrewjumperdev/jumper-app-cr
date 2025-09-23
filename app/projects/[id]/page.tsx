"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiStripe,
  SiExpress, SiMocha, SiHtml5, SiCss3, SiShopify, SiPython,
  SiPandas, SiNumpy, SiFlask, SiSass,
} from "react-icons/si";
import { FaUserShield } from "react-icons/fa";
import { projects } from "../../api/db/projects";
import { Project } from "../../types";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const { id } = React.use(params);
  const project: Project | undefined = projects.find(
    (proj) => proj.id === Number(id)
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <p className="text-xl">Projet non trouvé.</p>
      </div>
    );
  }

  const techIcons: Record<string, JSX.Element> = {
    javascript: <SiJavascript />,
    nextjs: <SiNextdotjs />,
    react: <SiReact />,
    tailwindcss: <SiTailwindcss />,
    "next-auth": <FaUserShield />,
    stripe: <SiStripe />,
    express: <SiExpress />,
    mocha: <SiMocha />,
    html: <SiHtml5 />,
    css: <SiCss3 />,
    shopify: <SiShopify />,
    python: <SiPython />,
    pandas: <SiPandas />,
    numpy: <SiNumpy />,
    flask: <SiFlask />,
    scss: <SiSass />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-12"
      >
        {/* Project Title & Description */}
        <div className="mb-8 mt-20 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {project.title}
          </h1>
          <p className="text-lg opacity-80">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Technical Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Détails Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.technicalDetails && project.technicalDetails.length > 0 ? (
              project.technicalDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-2">{detail.title}</h3>
                  {Array.isArray(detail.description) ? (
                    <ul className="list-disc ml-6 space-y-1 text-gray-300">
                      {detail.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300">{detail.description}</p>
                  )}
                </motion.div>
              ))
            ) : (
              <p className="text-gray-300">Aucun détail technique défini.</p>
            )}
          </div>
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {project.urlProject && (
            <Link
              href={project.urlProject}
              target="_blank"
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105"
            >
              Voir le Projet
            </Link>
          )}
          {project.repository && (
            <Link
              href={project.repository}
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105"
            >
              Voir le Repository
            </Link>
          )}
        </motion.div>

        {/* Technologies */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Technologies</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {project.mainTools.map((tool) => (
              <motion.div
                key={tool}
                className="flex flex-col items-center p-4 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
              >
                <div className="text-4xl text-gray-200 mb-2">
                  {techIcons[tool.toLowerCase()] || <span>{tool}</span>}
                </div>
                <span className="text-gray-300 font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
