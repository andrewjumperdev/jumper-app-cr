"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactNumber from "../components/ContactNumbre";
import { useLang } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const experience = [
  {
    id: 0,
    role: { fr: "Full-stack Developer", es: "Desarrollador Full-stack" },
    company: "World Kwest Inc.",
    via: "GDream Studio",
    period: { fr: "Juil. 2025 – Présent", es: "Jul. 2025 – Presente" },
    type: { fr: "Freelance · Remote", es: "Freelance · Remoto" },
    location: "Paris, France",
    color: "border-l-blue-500",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    summary: {
      fr: "Développement complet from scratch d'une plateforme Backoffice et d'API REST pour soutenir la vision internationale de World Kwest avec Deno, Fresh framework et TypeScript.",
      es: "Desarrollo completo desde cero de una plataforma Backoffice y APIs REST para apoyar la visión internacional de World Kwest con Deno, Fresh framework y TypeScript.",
    },
    bullets: {
      fr: [
        "Conception d'API sécurisées avec Deno, TypeScript et PostgreSQL via Kysely ORM",
        "Développement d'interfaces administrateur avec Fresh (Deno) et Tailwind CSS / DaisyUI",
        "UX mobile-first, authentification et autorisation avec JWT",
        "Architecture modulaire scalable, Clean Code et CI/CD",
      ],
      es: [
        "Diseño de APIs seguras con Deno, TypeScript y PostgreSQL vía Kysely ORM",
        "Desarrollo de interfaces de administrador con Fresh (Deno) y Tailwind CSS / DaisyUI",
        "UX mobile-first, autenticación y autorización con JWT",
        "Arquitectura modular escalable, Clean Code y CI/CD",
      ],
    },
    results: {
      fr: ["Infrastructure backoffice robuste et scalable from scratch", "Sécurité renforcée par JWT", "Interfaces performantes prêtes pour la croissance internationale"],
      es: ["Infraestructura backoffice robusta y escalable desde cero", "Seguridad reforzada por JWT", "Interfaces de alto rendimiento listas para crecimiento internacional"],
    },
    stack: ["Deno", "Fresh", "TypeScript", "PostgreSQL", "Kysely", "Tailwind CSS", "DaisyUI", "JWT", "REST API"],
  },
  {
    id: 1,
    role: { fr: "Fondateur & CEO · Web Developer", es: "Fundador & CEO · Web Developer" },
    company: "Jumper Enterprise",
    via: "",
    period: { fr: "Jan. 2025 – Présent", es: "Ene. 2025 – Presente" },
    type: { fr: "Entrepreneur · Remote", es: "Emprendedor · Remoto" },
    location: "Paris, France",
    color: "border-l-purple-500",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    summary: {
      fr: "Fondateur et CEO d'une startup spécialisée dans l'automatisation des ventes, du marketing et du support client grâce à l'IA. Développement d'agents intelligents permettant aux entreprises de fonctionner 24/7.",
      es: "Fundador y CEO de una startup especializada en automatización de ventas, marketing y soporte al cliente con IA. Desarrollo de agentes inteligentes que permiten a las empresas operar 24/7.",
    },
    bullets: {
      fr: [
        "Développement front-end complet avec React, Next.js et Tailwind CSS",
        "Conception d'agents IA: Agente Ventas Pro, Agente Google Reviews, Agente Citas, Blog SEO, Manager E-Commerce",
        "Automatisation des processus via n8n et Make",
        "Définition de la stratégie produit, roadmap et gestion d'équipe",
      ],
      es: [
        "Desarrollo front-end completo con React, Next.js y Tailwind CSS",
        "Diseño de agentes IA: Agente Ventas Pro, Agente Google Reviews, Agente Citas, Blog SEO, Manager E-Commerce",
        "Automatización de procesos vía n8n y Make",
        "Definición de estrategia de producto, roadmap y gestión de equipo",
      ],
    },
    results: {
      fr: ["Agents IA déployés pour automatiser ventes, marketing et support", "Clients satisfaits avec ROI mesurable", "Startup en croissance active"],
      es: ["Agentes IA desplegados para automatizar ventas, marketing y soporte", "Clientes satisfechos con ROI medible", "Startup en crecimiento activo"],
    },
    stack: ["React", "Next.js", "Tailwind CSS", "n8n", "Make", "Python", "OpenAI", "UX/UI"],
    link: "https://jumperenterprise.com",
  },
  {
    id: 2,
    role: { fr: "Full-stack Developer", es: "Desarrollador Full-stack" },
    company: "SAMANJO",
    via: "",
    period: { fr: "Oct. 2024 – Sept. 2025", es: "Oct. 2024 – Sept. 2025" },
    type: { fr: "Freelance · Remote", es: "Freelance · Remoto" },
    location: "Paris, France",
    color: "border-l-green-500",
    badge: "bg-green-500/20 text-green-300 border-green-500/30",
    summary: {
      fr: "Pilotage complet d'une application web B2B modulaire avec dashboards interactifs, carrousels dynamiques et sécurité MFA. Automatisation du paiement (carte bleue & SEPA).",
      es: "Dirección completa de una aplicación web B2B modular con dashboards interactivos, carruseles dinámicos y seguridad MFA. Automatización de pagos (tarjeta y SEPA).",
    },
    bullets: {
      fr: [
        "Architecture Next.js (SSR/SSG) pour réduire les temps de chargement et améliorer le SEO",
        "Intégration Chart.js pour dashboards KPI et Swiper.js pour carrousels responsives",
        "Authentification MFA avec Firebase, APIs sécurisées pour gestion des rôles",
        "Intégration Stripe pour cartes bleues et domiciliations SEPA",
      ],
      es: [
        "Arquitectura Next.js (SSR/SSG) para reducir tiempos de carga y mejorar el SEO",
        "Integración de Chart.js para dashboards de KPI y Swiper.js para carruseles responsivos",
        "Autenticación MFA con Firebase, APIs seguras para gestión de roles",
        "Integración de Stripe para tarjetas y domiciliaciones SEPA",
      ],
    },
    results: {
      fr: ["–30% de temps de chargement (SSR/SSG)", "+25% de taux de conversion B2B", "–80% d'incidents de sécurité après MFA"],
      es: ["–30% en tiempo de carga (SSR/SSG)", "+25% en tasa de conversión B2B", "–80% en incidentes de seguridad tras MFA"],
    },
    stack: ["React", "Next.js", "Tailwind CSS", "Chart.js", "Swiper.js", "Firebase", "Stripe", "SEPA"],
    link: "https://samanjointernacional.com",
  },
  {
    id: 3,
    role: { fr: "Full-Stack Developer", es: "Desarrollador Full-Stack" },
    company: "3D-Expert.fr",
    via: "Wanhao France",
    period: { fr: "Sept. 2023 – Sept. 2024", es: "Sept. 2023 – Sept. 2024" },
    type: { fr: "CDI · Hybride", es: "CDI · Híbrido" },
    location: "Paris, France",
    color: "border-l-orange-500",
    badge: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    summary: {
      fr: "Développement de Yumi Sync Service, outil d'automatisation pour synchronisation de fichiers entre Raspberry Pi et serveur central. Migration du site web vers une stack moderne.",
      es: "Desarrollo de Yumi Sync Service, herramienta de automatización para sincronización de archivos entre Raspberry Pi y servidor central. Migración del sitio web a un stack moderno.",
    },
    bullets: {
      fr: [
        "Scripts Python pour détecter les changements de fichiers sur Raspberry Pi",
        "API Express.js pour gérer uploads, authentification par tokens et filtrage MAC",
        "Contribution open source au projet Yumi Lab (GitHub)",
        "Migration du site vers stack moderne mobile-first avec +30% de conversion",
      ],
      es: [
        "Scripts Python para detectar cambios de archivos en Raspberry Pi",
        "API Express.js para gestionar uploads, autenticación por tokens y filtrado MAC",
        "Contribución open source al proyecto Yumi Lab (GitHub)",
        "Migración del sitio a stack moderno mobile-first con +30% de conversión",
      ],
    },
    results: {
      fr: ["–70% de temps de maintenance grâce à l'automatisation", "API Express capable de gérer +200 uploads simultanés", "+30% de taux de conversion sur le site"],
      es: ["–70% en tiempo de mantenimiento gracias a la automatización", "API Express capaz de manejar +200 uploads simultáneos", "+30% en tasa de conversión del sitio"],
    },
    stack: ["Python", "Express.js", "Node.js", "Raspberry Pi", "JavaScript", "HTML/CSS", "Shopify", "Liquid"],
  },
  {
    id: 4,
    role: { fr: "Gestionnaire de Flux E-Commerce", es: "Gestor de Flujos E-Commerce" },
    company: "Bobochic Paris",
    via: "",
    period: { fr: "Juil. 2022 – Sept. 2023", es: "Jul. 2022 – Sept. 2023" },
    type: { fr: "Contrat d'apprentissage", es: "Contrato de aprendizaje" },
    location: "Paris, France",
    color: "border-l-red-500",
    badge: "bg-red-500/20 text-red-300 border-red-500/30",
    summary: {
      fr: "Conception d'un outil de benchmark basé sur un web scraper pour la base de données PrestaShop. Automatisation complète de la récupération, injection et validation des données produits.",
      es: "Diseño de una herramienta de benchmark basada en web scraper para la base de datos PrestaShop. Automatización completa de la recuperación, inyección y validación de datos de productos.",
    },
    bullets: {
      fr: [
        "Scraper Python (BeautifulSoup, Requests) pour extraire quotidiennement les données produits",
        "Injection automatique des données via l'API REST PrestaShop avec gestion des erreurs",
        "Scripts modulaires réutilisables pour parsing CSV et envoi d'alertes email",
        "Documentation et intégration au workflow Git",
      ],
      es: [
        "Scraper Python (BeautifulSoup, Requests) para extraer datos de productos diariamente",
        "Inyección automática de datos vía API REST de PrestaShop con gestión de errores",
        "Scripts modulares reutilizables para parsing CSV y envío de alertas por email",
        "Documentación e integración al flujo de trabajo Git",
      ],
    },
    results: {
      fr: ["+70% de productivité sur la veille concurrentielle", "–90% d'erreurs manuelles grâce aux validations", "Cohérence des données renforcée pour les équipes marketing"],
      es: ["+70% de productividad en análisis competitivo", "–90% de errores manuales gracias a las validaciones", "Mayor consistencia de datos para los equipos de marketing"],
    },
    stack: ["Python", "BeautifulSoup", "Requests", "PrestaShop API", "SQL", "Git"],
  },
];

const skillGroups = [
  { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Swiper.js", "Chart.js"], color: "text-blue-400" },
  { label: "Backend", skills: ["Node.js", "Deno", "Express.js", "Fresh", "PostgreSQL", "MongoDB", "Kysely", "JWT"], color: "text-green-400" },
  { label: "IA & Automation", skills: ["n8n", "Make", "Python", "OpenAI API", "BeautifulSoup", "AI Agents"], color: "text-purple-400" },
  { label: "Payments & Auth", skills: ["Stripe", "SEPA", "Firebase", "Next-Auth", "bcrypt"], color: "text-orange-400" },
  { label: "DevOps & Tools", skills: ["Git", "CI/CD", "Raspberry Pi", "Multer", "EJS", "Shopify", "Liquid"], color: "text-red-400" },
];

const languages = [
  { lang: "Français", level: "C1", pct: 90 },
  { lang: "Español", level: "Natif", pct: 100 },
  { lang: "English", level: "B2", pct: 72 },
];

const softSkills = [
  "Autonomie", "Leadership", "Problem solving", "Travail d'équipe", "Esprit analytique",
  "Product Management", "Agile / Scrum", "Clean Code", "Persévérance",
];

const Resume = () => {
  const { t, lang } = useLang();
  const [openExp, setOpenExp] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight">
          ANDREW ALFARO
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mt-2">
          {t("resume.subtitle")}
        </h2>
        {/* Contact bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <FaEnvelope size={12} />
            <a href="mailto:aacpariscr@gmail.com" className="hover:text-blue-400 transition-colors">
              aacpariscr@gmail.com
            </a>
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt size={12} />
            Île-de-France, France
          </span>
          <span><ContactNumber /></span>
          <a
            href="https://jumperenterprise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
          >
            jumperenterprise.com <FaExternalLinkAlt size={10} />
          </a>
          <a
            href="https://github.com/andrewjumperdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <FaGithub size={13} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-jumper/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={13} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-10 text-gray-300 text-sm leading-relaxed"
      >
        {t("resume.summary")}
      </motion.div>

      {/* Experience timeline */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 flex items-center gap-2">
          <span className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 inline-block" />
          {t("resume.experience")}
        </h2>

        <div className="space-y-4">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`border-l-2 ${exp.color} bg-white/5 border border-white/10 rounded-r-2xl overflow-hidden`}
            >
              {/* Header - always visible, clickable */}
              <button
                className="w-full text-left px-5 py-4"
                onClick={() => setOpenExp(openExp === exp.id ? null : exp.id)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-white font-bold text-base">{exp.role[lang]}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${exp.badge}`}>
                        {exp.type[lang]}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-0.5">
                      <span className="font-semibold text-gray-300">{exp.company}</span>
                      {exp.via && <span className="text-gray-500"> · {exp.via}</span>}
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-blue-400 hover:text-blue-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={9} className="inline" />
                        </a>
                      )}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-blue-300 text-xs font-semibold">{exp.period[lang]}</p>
                    <p className="text-gray-500 text-xs">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2 text-left">{exp.summary[lang]}</p>
                <span className="text-xs text-blue-400 mt-1 block">
                  {openExp === exp.id ? "▲ Réduire" : "▼ Voir détails"}
                </span>
              </button>

              {/* Expandable details */}
              {openExp === exp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-5 pb-5 space-y-4 border-t border-white/10"
                >
                  {/* Bullets */}
                  <div className="pt-3">
                    <ul className="space-y-2">
                      {exp.bullets[lang].map((b, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-gray-300">
                          <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <p className="text-xs font-semibold text-green-400 mb-2">
                      {lang === "fr" ? "📈 Résultats" : "📈 Resultados"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.results[lang].map((r, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 bg-green-500/10 border border-green-500/20 text-green-300 rounded-lg">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stack */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 mb-2">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 bg-gray-800 border border-gray-700 text-gray-300 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 flex items-center gap-2">
          <span className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 inline-block" />
          {t("resume.skills")}
        </h2>
        <div className="space-y-4">
          {skillGroups.map(({ label, skills, color }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className={`text-xs font-semibold ${color} mb-3`}>{label}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:border-blue-500/50 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 flex items-center gap-2">
          <span className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 inline-block" />
          {t("resume.education")}
        </h2>
        <div className="space-y-3">
          {[
            { title: "Licence Développeur Web", place: "Digital Campus, Paris", year: "2021 – 2022", icon: "🎓" },
            { title: "Développement Web", place: "Universidad de Costa Rica", year: "2019 – 2020", icon: "🎓" },
            { title: "Node.js, Express & MongoDB", place: "OpenClassrooms", year: "2023", icon: "📜" },
            { title: "Cisco CCNA", place: "Infonet, Costa Rica", year: "2018 – 2019", icon: "📜" },
          ].map(({ title, place, year, icon }) => (
            <div
              key={title}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span>{icon}</span>
                <div>
                  <p className="text-white text-sm font-medium">{title}</p>
                  <p className="text-gray-400 text-xs">{place}</p>
                </div>
              </div>
              <span className="text-blue-400 text-xs font-semibold">{year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Languages + Soft Skills side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {/* Languages */}
        <section>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 inline-block" />
            {t("resume.languages")}
          </h2>
          <div className="space-y-4">
            {languages.map(({ lang: l, level, pct }) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white text-sm font-medium">{l}</span>
                  <span className="text-blue-400 text-xs font-semibold">{level}</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 inline-block" />
            {t("resume.softskills")}
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="text-center border-t border-white/10 pt-8">
        <p className="text-gray-400 text-sm mb-4">
          {lang === "fr"
            ? "Intéressé(e) ? Contactez-moi pour discuter de votre projet ou d'une opportunité."
            : "¿Interesado? Contáctame para hablar sobre tu proyecto u oportunidad."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:aacpariscr@gmail.com"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-all text-sm"
          >
            {lang === "fr" ? "Me contacter" : "Contactarme"}
          </a>
          <a
            href="https://jumperenterprise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-purple-500/50 text-purple-300 font-bold rounded-xl hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2 text-sm"
          >
            Jumper Enterprise <FaExternalLinkAlt size={11} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
