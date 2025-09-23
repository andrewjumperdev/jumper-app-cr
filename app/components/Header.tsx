"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const Header = () => {
  return (
    <header className="relative min-h-[80vh] container mt-20 mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 overflow-hidden">
      <ParticlesBackground />
      <div className="w-full bg-transparent max-w-[1280px] z-20 flex flex-col md:flex-row items-center md:justify-between gap-6">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left max-w-2xl"
        >
          {/* Skills destacadas */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm uppercase py-2 px-4 rounded-md mb-4 inline-block">
            Développeur Front-end · React · Next.js · Redux · Node.js · Express · MongoDB
          </div>

          {/* Título SEO optimizado */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="text-blue-600">Je suis </span>
            <span className="text-purple-600">Andrew Alfaro</span>
          </motion.h1>

          {/* Descripción con keywords SEO */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
            Développeur Full-stack passionné par la création d&apos;applications web performantes,
            responsives et sécurisées. Avec plus de 4 ans d&apos;expérience en React, Next.js et Node.js, je
            conçois des interfaces utilisateur intuitives et j&apos;automatisé des processus pour améliorer
            l&apos;efficacité des entreprises. Mon expertise inclut la gestion d&apos;API, le développement de
            dashboards interactifs et l&apos;intégration de solutions cloud modernes.
          </p>

          {/* CTA con acción clara */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/resume"
              className="bg-blue-600 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Voir mon CV
            </Link>
            <Link
              href="/projects"
              className="border-2 border-blue-600 text-blue-600 text-lg font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all"
            >
              Voir mes Projets
            </Link>
          </div>
        </motion.div>

        {/* Imagen de perfil con animación y SEO alt */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-[40vw] max-w-[208px] sm:w-[35vw] sm:max-w-[208px] md:w-[100vw] md:max-w-[208px] aspect-square rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-purple-600"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0px 0px 10px rgba(66, 153, 225, 0.6)",
                "0px 0px 30px rgba(139, 92, 246, 0.8)",
                "0px 0px 10px rgba(66, 153, 225, 0.6)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full rounded-full"
          ></motion.div>
          <Image
            src="/img/Foto.png"
            alt="Andrew Alfaro, Développeur Full-stack React Next.js"
            fill
            className="object-cover rounded-full"
            priority
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
