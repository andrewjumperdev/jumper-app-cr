'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../api/db/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../context/LanguageContext';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type Category = 'all' | 'web' | 'ai' | 'ecommerce' | 'tools';

const categoryMap: Record<number, Category> = {
  8: 'ai',       // Jumper Enterprise
  0: 'web',      // Samanjo
  1: 'tools',    // Yumi-ID
  2: 'ecommerce',// Wanhao
  3: 'tools',    // Trading Bot
  4: 'ecommerce',// Kanap
  5: 'web',      // Piiquante
  6: 'web',      // Kasa
  7: 'tools',    // Web Scrapper
};

const stackColors: Record<string, string> = {
  react: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
  nextjs: 'bg-gray-700/60 text-gray-200 border-gray-600',
  typescript: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  python: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25',
  tailwindcss: 'bg-teal-500/15 text-teal-300 border-teal-500/25',
  mongodb: 'bg-green-500/15 text-green-300 border-green-500/25',
  express: 'bg-gray-700/60 text-gray-200 border-gray-600',
  firebase: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  stripe: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
  n8n: 'bg-red-500/15 text-red-300 border-red-500/25',
  openai: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  make: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  shopify: 'bg-green-500/15 text-green-300 border-green-500/25',
  default: 'bg-gray-700/50 text-gray-300 border-gray-600',
};

function getTagClass(tag: string) {
  return stackColors[tag.toLowerCase()] ?? stackColors.default;
}

const filters: { key: Category; labelKey: string }[] = [
  { key: 'all', labelKey: 'projects.filter.all' },
  { key: 'web', labelKey: 'projects.filter.web' },
  { key: 'ai', labelKey: 'projects.filter.ai' },
  { key: 'ecommerce', labelKey: 'projects.filter.ecommerce' },
  { key: 'tools', labelKey: 'projects.filter.tools' },
];

const Projects = () => {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => categoryMap[p.id] === activeFilter);
  }, [activeFilter]);

  // Jumper Enterprise is always featured (id=8)
  const featured = projects.find((p) => p.id === 8);
  const rest = filtered.filter((p) => p.id !== 8);

  return (
    <section className="min-h-screen bg-gray-900 pt-24 pb-16">
      {/* Background accent */}
      <div className="fixed top-1/4 -left-48 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 -right-48 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold text-blue-400 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full">
            Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-4 mb-3">
            {t('projects.title')}
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl border transition-all ${
                activeFilter === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              {t(labelKey)}
            </button>
          ))}
        </motion.div>

        {/* Featured: Jumper Enterprise (always shown, full width) */}
        {(activeFilter === 'all' || activeFilter === 'ai') && featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative bg-gradient-to-br from-purple-900/40 via-gray-900 to-blue-900/30 border border-purple-500/30 rounded-2xl overflow-hidden">
              {/* Featured badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-bold text-purple-300 border border-purple-500/40 bg-purple-500/20 px-3 py-1 rounded-full">
                  ⭐ {t('projects.featured')}
                </span>
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-2/5 h-52 lg:h-auto min-h-[200px] bg-gray-800/50 flex-shrink-0 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">🤖</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                      Jumper Enterprise
                    </h2>
                    <p className="text-purple-300 text-sm font-medium mb-3">
                      AI Solutions for Smarter Sales · Founder & CEO
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3">
                      Startup spécialisée dans l&apos;automatisation des ventes, marketing et support client via des agents IA. Agents déployés: Ventas Pro, Google Reviews, Citas, Blog SEO, Manager E-Commerce.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {['React', 'Next.js', 'n8n', 'Make', 'Python', 'OpenAI'].map((tag) => (
                        <span key={tag} className={`text-xs px-2.5 py-1 rounded-lg border ${getTagClass(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://jumperenterprise.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-500/20"
                    >
                      <FaExternalLinkAlt size={11} /> jumperenterprise.com
                    </a>
                    <Link
                      href="/projects/8"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple-500/40 text-purple-300 text-sm font-bold rounded-xl hover:bg-purple-500/10 transition-all"
                    >
                      {t('projects.cta.details')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="group bg-gray-800/60 border border-white/8 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-gray-700/40 flex-shrink-0">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category badge */}
                  <div className="absolute top-2 right-2">
                    <span className="text-xs px-2 py-0.5 bg-black/60 backdrop-blur-sm text-gray-300 rounded-md">
                      {categoryMap[project.id] === 'web' && 'Web App'}
                      {categoryMap[project.id] === 'ecommerce' && 'E-Commerce'}
                      {categoryMap[project.id] === 'tools' && 'Tool'}
                      {categoryMap[project.id] === 'ai' && 'IA'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.mainTools.slice(0, 4).map((tool: string) => (
                      <span
                        key={tool}
                        className={`text-xs px-2 py-0.5 rounded border ${getTagClass(tool)}`}
                      >
                        {tool}
                      </span>
                    ))}
                    {project.mainTools.length > 4 && (
                      <span className="text-xs px-2 py-0.5 rounded border bg-gray-700/50 text-gray-400 border-gray-600">
                        +{project.mainTools.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 text-center px-3 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold rounded-lg hover:bg-blue-600/30 transition-colors"
                    >
                      {t('projects.cta.details')}
                    </Link>
                    {project.urlProject && project.urlProject !== project.repository && (
                      <a
                        href={project.urlProject}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-gray-700/50 border border-gray-600 text-gray-300 text-xs rounded-lg hover:border-blue-500/40 transition-colors"
                        aria-label="Demo"
                      >
                        <FaExternalLinkAlt size={11} />
                      </a>
                    )}
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-gray-700/50 border border-gray-600 text-gray-300 text-xs rounded-lg hover:border-blue-500/40 transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {rest.length === 0 && activeFilter !== 'all' && activeFilter !== 'ai' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm">Aucun projet dans cette catégorie.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
