'use client';

import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[30rem] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/header-img/hero-background.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6 md:px-12"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl opacity-20"></div>

        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-wide mb-4">
          Je crée des expériences web incroyables 🚀
        </h1>
        <p className="text-lg sm:text-xl font-light max-w-2xl mx-auto mb-8">
          Spécialiste en <strong className="font-medium">Next.js</strong>,{" "}
          <strong className="font-medium">TypeScript</strong> et{" "}
          <strong className="font-medium">React</strong>, je développe des applications modernes et évolutives.
        </p>
        <motion.a
          href="#projects"
          className="inline-block bg-blue-600 text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.6)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explorer les projets
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
