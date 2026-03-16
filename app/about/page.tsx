"use client";

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const education = [
  { title: "Licence Développeur Web", place: "Digital Campus, Paris", year: "2021 – 2022" },
  { title: "Développement Web", place: "Universidad de Costa Rica", year: "2019 – 2020" },
  { title: "Cisco CCNA", place: "Infonet, Costa Rica", year: "2018 – 2019" },
  { title: "Node.js, Express & MongoDB", place: "OpenClassrooms", year: "2023" },
  { title: "Curso Práctico de JavaScript", place: "Platzi", year: "2021" },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Deno", "Express.js", "Fresh framework", "PostgreSQL", "MongoDB"] },
  { category: "IA & Automation", items: ["n8n", "Make", "Python", "OpenAI API", "AI Agents"] },
  { category: "Tools & DevOps", items: ["Git", "Firebase", "Stripe", "JWT", "CI/CD", "Kysely"] },
];

const About = () => {
  const { t } = useLang();

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-xs font-semibold text-blue-400 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full">
          About
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-4 mb-4">
          {t("about.title")}
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {t("about.intro")}
        </p>
      </motion.div>

      {/* Bio paragraphs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-10 space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed"
      >
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
        <p>{t("about.p3")}</p>
      </motion.div>

      {/* Jumper Enterprise highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-gradient-to-br from-purple-500/15 to-blue-500/10 border border-purple-500/30 rounded-2xl p-6 sm:p-8 mb-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-semibold text-purple-400 border border-purple-500/30 bg-purple-500/10 px-3 py-1 rounded-full">
              Founder & CEO
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">Jumper Enterprise</h2>
            <p className="text-purple-300 text-sm font-medium">AI Solutions for Smarter Sales</p>
          </div>
          <a
            href="https://jumperenterprise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/40 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-colors text-sm font-semibold self-start sm:self-auto"
          >
            jumperenterprise.com <FaExternalLinkAlt size={11} />
          </a>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {t("lang.switch") === "ES"
            ? "Startup spécialisée dans l'automatisation des ventes, du marketing, du support client et des opérations grâce à l'IA. Développement d'agents intelligents permettant aux entreprises de fonctionner 24/7 automatiquement."
            : "Startup especializada en automatización de ventas, marketing, soporte al cliente y operaciones con IA. Desarrollo de agentes inteligentes que permiten a las empresas operar 24/7 de forma automatizada."
          }
        </p>
        <div className="flex flex-wrap gap-2">
          {["Agente Ventas Pro", "Agente Google Reviews", "Agente Citas", "Blog SEO", "Manager E-Commerce"].map((agent) => (
            <span key={agent} className="text-xs px-2.5 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-200 rounded-lg">
              {agent}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          Stack Technique
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold text-sm mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          {t("about.education")}
        </h2>
        <div className="space-y-3">
          {education.map(({ title, place, year }) => (
            <div
              key={title}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-blue-500/30 transition-colors"
            >
              <div>
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-gray-400 text-xs mt-0.5">{place}</p>
              </div>
              <span className="text-blue-400 text-xs font-medium mt-1 sm:mt-0">{year}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <p className="text-gray-500 text-sm">{t("about.social")}</p>
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/jumper_Develop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-jumper/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/andrewjumperdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
