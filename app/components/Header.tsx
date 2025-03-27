'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const Header = () => {
  return (
    <header className="h-dvh container mx-auto px-4 md:px-8 pb-5 flex items-center">
      <ParticlesBackground />
      <div className="w-full bg-transparent max-w-[1280px] z-20 mt-20 flex flex-col md:flex-row items-center md:justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left max-w-2xl"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm uppercase py-2 px-4 rounded-md mb-4 inline-block">
            Next.js · React · Redux · Node · Express · Mongo
          </div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-extrabold mb-4"
          >
            <span className="text-blue-600">Je suis </span>
            <span className="text-purple-600">Andrew Alfaro</span>
          </motion.h1>

          <p className="text-lg text-gray-200 mb-6">
            Développeur Front-end passionné par l&apos;innovation technologique
            et la création d&apos;interfaces utilisateurs performantes et responsives.
            Fort de plus de 4 ans d&apos;expérience dans le développement web, je
            me spécialise dans la gestion d&apos;API et l&apos;automatisation des
            processus, intégrant des solutions innovantes avec React, Next.js,
            Node.js et Firebase pour offrir une expérience fluide et sécurisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/resume"
              className="bg-blue-600 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              CV
            </Link>
            <Link
              href="/projects"
              className="border-2 border-blue-600 text-blue-600 text-lg font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all"
            >
              Projets
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-purple-600"
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
            alt="Profil"
            width={408}
            height={408}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
