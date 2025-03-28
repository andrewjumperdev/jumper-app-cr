'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../api/db/projects';
import Image from 'next/image';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 mt-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-white md:text-5xl">
          🚀 Mes Projets
        </h1>
        <p className="text-lg mb-12 text-white opacity-80">
          Découvrez quelques-uns de mes projets les plus passionnants. Chaque projet a été conçu et développé avec attention à l&apos;expérience utilisateur et à la performance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative bg-gray-800 p-6 rounded-xl shadow-lg overflow-hidden h-[350px] flex flex-col group"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg transition-all duration-500 group-hover:scale-110"
                width={500}
                height={500}
              />
              <h3 className="text-2xl font-semibold mt-4 text-white group-hover:text-blue-500">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2 line-clamp-3">
                {project.description}
              </p>

              {hoveredId === project.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-80 p-6 text-center rounded-lg gap-4"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 mt-2 line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={`/projects/${project.id}`}
                    className="bg-blue-500 px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
                  >
                    Voir Détails
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
