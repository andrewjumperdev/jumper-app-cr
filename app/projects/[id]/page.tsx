'use client';
import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/app/api/db/projects';
import type { Project } from '@/app/types/index';
import { SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiStripe, SiExpress, SiMocha, SiHtml5, SiCss3, SiShopify, SiPython, SiPandas, SiNumpy, SiFlask, SiSass,  } from 'react-icons/si';
import { FaUserShield } from 'react-icons/fa';

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
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-xl">Projet non trouvé.</p>
      </div>
    );
  }


  const techIcons: Record<string, JSX.Element> = {
    javascript: <SiJavascript />,
    nextjs: <SiNextdotjs />,
    react: <SiReact />,
    tailwindcss: <SiTailwindcss />,
    'next-auth': <FaUserShield />,
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
    <div className="min-h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <div className="mb-8 mt-20">
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg opacity-80">{project.description}</p>
        </div>
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Détails Techniques</h2>
          <div className="space-y-4">
            {project.technicalDetails && project.technicalDetails.length > 0 ? (
              project.technicalDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-800 p-4 rounded-lg"
                >
                  <h3 className="text-2xl font-bold mb-2">{detail.title}</h3>
                  {Array.isArray(detail.description) ? (
                    <ul className="list-disc ml-6">
                      {detail.description.map((desc, i) => (
                        <li key={i} className="text-gray-300">
                          {desc}
                        </li>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          {project.urlProject && (
            <Link href={project.urlProject} target="_blank" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Voir le Projet
            </Link>
          )}
          {project.repository && (
            <Link href={project.repository} target="_blank" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Voir le Repository
            </Link>
          )}
        </motion.div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {project.mainTools.map((tool) => (
              <div key={tool} className="flex flex-col items-center">
                <div className="text-4xl text-gray-300">
                  {techIcons[tool.toLowerCase()] || <span>{tool}</span>}
                </div>
                <span className="mt-2 text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
