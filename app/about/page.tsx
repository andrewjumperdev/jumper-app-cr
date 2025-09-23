"use client";

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto my-10 mt-20 p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl">
      {/* Header */}
      <motion.div
        className="text-center my-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          À propos de moi
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Développeur fullstack avec un accent particulier sur le frontend, passionné
          par la création d'interfaces modernes et performantes, et l'automatisation des flux
          métier pour maximiser la productivité.
        </p>
      </motion.div>

      {/* Experiencia */}
      <motion.section
        className="mb-12 space-y-4 text-gray-200 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p>
          Avec plus de 3 ans d'expérience dans le développement web, j'ai dirigé et participé
          à des projets variés, allant de <strong>applications React/Next.js</strong> performantes
          à des systèmes backend robustes avec <strong>Node.js</strong> et <strong>Firebase</strong>.
        </p>
        <p>
          J'excelle dans l'intégration de <strong>TypeScript</strong> pour assurer la maintenabilité,
          réduire les bugs et faciliter la collaboration dans des projets complexes.
        </p>
        <p>
          En plus de coder, je développe des solutions d'automatisation pour la gestion de
          clients, commandes et marketing digital via des outils sur mesure.
        </p>
        <p>
          En dehors du développement, je pratique l'enseignement via workshops, je contribue
          à des projets open source et je reste à la pointe des tendances tech pour offrir
          toujours plus de valeur à mes clients.
        </p>
      </motion.section>

      {/* Educación */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center mb-6">
          Éducation & Certifications
        </h3>
        <ul className="space-y-4">
          <li className="bg-gray-800/40 text-white p-4 rounded-lg shadow-sm">
            Licence Développeur Web - Digital Campus, Paris
          </li>
          <li className="bg-gray-800/40 text-white p-4 rounded-lg shadow-sm">
            Certification Développement Web - Platzi, Costa Rica
          </li>
          <li className="bg-gray-800/40 text-white p-4 rounded-lg shadow-sm">
            Formation Python avancée - Hola Mundo
          </li>
          <li className="bg-gray-800/40 text-white p-4 rounded-lg shadow-sm">
            Gestion de projets Agile - LinkedIn Learning
          </li>
          <li className="bg-gray-800/40 text-white p-4 rounded-lg shadow-sm">
            Cisco CCNA - Infonet, Costa Rica
          </li>
        </ul>
      </motion.section>

      {/* Redes Sociales */}
      <motion.div
        className="flex justify-center gap-6 mt-8 text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a
          className="text-blue-400 hover:text-blue-300 transition-colors"
          href="https://twitter.com/jumper_Develop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          className="text-blue-600 hover:text-blue-500 transition-colors"
          href="https://www.linkedin.com/in/andrew-jumper/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-gray-200 hover:text-white transition-colors"
          href="https://github.com/andrewjumperdev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default About;
