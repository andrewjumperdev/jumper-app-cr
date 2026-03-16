"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import { useLang } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

const techBadges = [
  "React", "Next.js", "TypeScript", "Node.js", "Deno", "PostgreSQL", "n8n", "IA",
];

const stats = [
  { value: "4+", key: "header.stat.years" },
  { value: "15+", key: "header.stat.projects" },
  { value: "5+", key: "header.stat.companies" },
];

const Header = () => {
  const { t } = useLang();

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      <ParticlesBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {t("common.available")}
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
            >
              <span className="text-gray-100">{t("header.greeting")} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {t("header.name")}
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-blue-300 font-semibold mb-4 tracking-wide"
            >
              {t("header.badge")}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {t("header.description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <Link
                href="/resume"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:opacity-90 hover:shadow-blue-500/40 transition-all text-sm sm:text-base"
              >
                {t("header.cta.resume")}
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 border border-gray-600 text-gray-200 font-bold rounded-xl hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all text-sm sm:text-base"
              >
                {t("header.cta.projects")}
              </Link>
              <a
                href="https://jumperenterprise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-purple-600/50 text-purple-300 font-bold rounded-xl hover:border-purple-500 hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Jumper Enterprise <FaExternalLinkAlt size={12} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/andrewjumperdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-jumper/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <span className="text-gray-600 text-sm">|</span>
              <span className="text-gray-500 text-sm">{t("common.location")}</span>
            </motion.div>
          </motion.div>

          {/* Right: Photo + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 flex flex-col items-center gap-8"
          >
            {/* Profile image */}
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-blue-500/40"
              />
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59,130,246,0.4)",
                    "0 0 50px rgba(139,92,246,0.6)",
                    "0 0 20px rgba(59,130,246,0.4)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-blue-500/50 bg-gradient-to-br from-blue-900 to-purple-900"
              >
                <Image
                  src="/img/Foto.jpg"
                  alt="Andrew Alfaro – Full-stack Developer & Founder"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
              {stats.map(({ value, key }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-500/40 transition-colors"
                >
                  <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {value}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-tight">
                    {t(key)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center gap-2 max-w-xs">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-gray-800/80 border border-gray-700/60 text-gray-300 text-xs rounded-lg hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
