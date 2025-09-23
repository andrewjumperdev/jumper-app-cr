"use client";
import React from "react";
import ContactNumber from "../components/ContactNumbre";

const Resume = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20 p-6 bg-white/10 backdrop-blur-lg text-gray-200 rounded-xl shadow-xl">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-widest">
          ANDREW ALFARO
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mt-2">
          Full-Stack / Frontend Developer
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Développeur web expérimenté avec plus de 4 ans d’expérience, spécialisé en
          JavaScript, React, TypeScript et Node.js. Expert en applications web
          responsives, performantes et évolutives, intégration d’APIs REST et
          méthodologies Agile/Scrum. Reconnu pour mon autonomie, ma persévérance et
          ma capacité à résoudre des problèmes complexes.
        </p>
        <p className="mt-2 text-gray-400 text-lg">
          <span className="font-semibold">Contact:</span>{" "}
          <ContactNumber /> |{" "}
          <a href="mailto:aacpariscr@gmail.com" className="text-blue-400 hover:text-blue-300">
            aacpariscr@gmail.com
          </a>{" "}
          | Antony, Île-de-France, France
        </p>
        <p className="mt-1 text-blue-400 hover:text-blue-300">
          <a href="https://jumperenterprise.com" target="_blank" rel="noopener noreferrer">
            jumperenterprise.com
          </a>
        </p>
      </header>

      {/* Professional Experience */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-200 mb-6">Expérience Professionnelle</h3>

        {/* GDREAM STUDIO */}
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-blue-400">
            FULL-STACK DEVELOPER | GDREAM STUDIO, PARIS
          </h4>
          <p className="text-gray-400 italic mb-2">07/2025 – actuellement</p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Développement complet d’une plateforme Backoffice et d’API REST pour World Kwest avec DENO, FRESH et TYPESCRIPT.</li>
            <li>Création d’interfaces administrateur responsives avec TAILWIND CSS et DAISYUI, gestion des accès via JWT.</li>
            <li>Optimisation et testing de la base de données POSTGRESQL avec KYSELY pour stocker jusqu’à 10 000 utilisateurs.</li>
            <li>Implémentation des bonnes pratiques de Clean Code et CI/CD pour un time-to-market optimisé.</li>
            <li>Automatisation des processus backend et gestion des flux de données critiques.</li>
          </ul>
        </div>

        {/* SAMANJO */}
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-blue-400">
            LEAD DEVELOPER FRONTEND | SAMANJO, PARIS
          </h4>
          <p className="text-gray-400 italic mb-2">10/2024 – 07/2025</p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Conception et développement complet d’une application web B2B modulaire avec REACT, NEXT.JS et TAILWIND CSS.</li>
            <li>Optimisation UX/UI avec CHART.JS et SWIPER.JS pour visualisation dynamique et carrousels interactifs.</li>
            <li>Sécurisation multi-facteurs : Firebase pour clients et API NEXT.JS pour administrateurs.</li>
            <li>Backend pour automatiser paiements STRIPE (cartes et SEPA).</li>
            <li>Design responsive mobile-first pour tous les appareils.</li>
          </ul>
        </div>

        {/* WANHAO */}
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-blue-400">
            DÉVELOPPEUR FRONTEND & BACKEND | WANHAO, PARIS
          </h4>
          <p className="text-gray-400 italic mb-2">10/2023 – 09/2024</p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Développement de "Yumi Sync Service", outil d’automatisation pour la synchronisation des fichiers entre Raspberry Pi et serveur central.</li>
            <li>Modernisation du site web en version responsive, augmentant les ventes de 70%.</li>
            <li>Programmation de scripts PYTHON pour gestion des changements et reporting.</li>
            <li>Backend avec EXPRESS.JS pour traitement sécurisé des données et gestion d’identifiants uniques.</li>
          </ul>
        </div>

        {/* BOBOCHIC */}
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-blue-400">
            DÉVELOPPEUR JAVASCRIPT | BOBOCHIC, PARIS
          </h4>
          <p className="text-gray-400 italic mb-2">07/2022 – 09/2023</p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Développement d’un web scraper avancé pour benchmark de données PRESTASHOP.</li>
            <li>Automatisation de l’intégration des données produits avec NODE.JS.</li>
            <li>Scripts PYTHON pour automatiser tâches répétitives, optimisant productivité et temps de l’équipe.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-200 mb-4">Éducation & Certifications</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li><strong>Licence Développeur Web</strong> - Digital Campus, Paris (06/2021 – 06/2023)</li>
          <li><strong>Développement Web B+2</strong> - Université du Costa Rica (03/2019 – 03/2020)</li>
          <li><strong>Cisco CCNA</strong> - Cisco, Costa Rica (09/2018 – 06/2019)</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-200 mb-4">Compétences & Technologies</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Javascript, Typescript, React, Redux, Nodejs, Nextjs, Express</li>
          <li>MySQL, MongoDB, PostgresSQL</li>
          <li>Python, Firebase, Stripe</li>
          <li>Tailwind CSS, DaisyUI</li>
          <li>Méthodologies agiles, CI/CD, Clean Code</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-200 mb-4">Langues</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Français</li>
          <li>Anglais</li>
          <li>Espagnol</li>
        </ul>
      </section>

      {/* Soft Skills */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-200 mb-4">Soft Skills</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Méthodologies agiles</li>
          <li>Esprit analytique</li>
          <li>Travail d'équipe</li>
          <li>Résolution des problèmes</li>
          <li>Persévérance</li>
        </ul>
      </section>

      {/* Download CV */}
      <section className="text-center mb-12">
        <a
          href="Andrew-Alfaro-Web-Developer.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-colors"
        >
          Télécharger le CV
        </a>
      </section>
    </div>
  );
};

export default Resume;
