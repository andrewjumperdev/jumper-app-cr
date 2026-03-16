'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsModal from "./ProjectsModal";
import { Project } from "../types";
import { projects } from "../api/db/projects";
import { useLang } from "../context/LanguageContext";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { t } = useLang();

  const importantProjects: Project[] = projects.filter(
    (project: Project) => [0, 1, 2].includes(project.id)
  );

  const highlights = [
    { icon: "⚡", label: "React & Next.js" },
    { icon: "🤖", label: "AI Agents & n8n" },
    { icon: "🔒", label: "Deno & TypeScript" },
    { icon: "🚀", label: "Stripe & Payments" },
  ];

  return (
    <section
      className="relative min-h-[28rem] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/img/header-img/hero-background.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Tag */}
          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-400 border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 rounded-full mb-6">
            Jumper Enterprise · Founder & CEO
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-6">
            {t("hero.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t("hero.title2")}
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {t("hero.subtitle")}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {highlights.map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/15 text-gray-200 text-xs sm:text-sm rounded-lg backdrop-blur-sm"
              >
                <span>{icon}</span>
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:opacity-90 transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {t("hero.cta")} 🚀
            </motion.button>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm sm:text-base backdrop-blur-sm"
            >
              {t("nav.contact")}
            </Link>
          </div>
        </motion.div>
      </div>

      <ProjectsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        projects={importantProjects}
      />
    </section>
  );
};

export default HeroSection;
