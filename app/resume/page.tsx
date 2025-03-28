"use client";
import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white text-gray-900 rounded-lg">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600 tracking-tight">Andrew Alfaro</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Développeur Front-end</h2>
        <p className="mt-2 text-lg text-gray-500">
          <span className="font-bold">Contact: </span>
          <a href="tel:+330749927546" className="text-blue-600 hover:text-blue-700 transition duration-300">
            +33 07 49 92 75 46
          </a>
          <span className="mx-2">|</span>
          <a href="mailto:aacpariscr@gmail.com" className="text-blue-600 hover:text-blue-700 transition duration-300">
            aacpariscr@gmail.com
          </a>
          <span className="mx-2">|</span> Antony, France
        </p>
      </header>

      {/* About Me Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800">À propos de moi</h3>
        <p className="mt-4 text-lg text-gray-700">
          Développeur web avec plus de 4 ans d&apos;expérience, spécialisé en React, Next.Js, Node.Js et Firebase. J&apos;ai une passion
          pour le développement d&apos;applications web responsive et performantes offrant une expérience utilisateur fluide et sécurisée.
          Analytique et méthodique, je m&apos;assure que chaque projet atteint son plein potentiel.
        </p>
      </section>

            {/* Experience Section */}
            <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800">Expérience</h3>

        <div className="mt-6">
          <h4 className="text-2xl font-semibold text-gray-800">Développeur Full Stack - Bobochic, Paris</h4>
          <p className="text-gray-600">Juillet 2022 - Septembre 2023</p>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            <li>Développement d&apos;un web scraper avancé pour collecter et analyser des données depuis PRESTASHOP.</li>
            <li>Automatisation des processus d&apos;intégration des données produits avec NODE.JS.</li>
            <li>Création de scripts PYTHON pour automatiser les tâches répétitives.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-2xl font-semibold text-gray-800">Développeur Frontend & Backend - Wanhao, Paris</h4>
          <p className="text-gray-600">Octobre 2023 - Septembre 2024</p>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            <li>Développement et déploiement de &apos;Yumi Sync Service&apos; pour la synchronisation des modifications de fichiers.</li>
            <li>Migration et modernisation du site web avec une version responsive.</li>
            <li>Contribution au projet open source Yumi Lab.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-2xl font-semibold text-gray-800">Lead Developer Frontend - Samanjo, Paris</h4>
          <p className="text-gray-600">Octobre 2024 - Février 2025</p>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            <li>Conception et développement d&apos;une application web e-commerce B2B avec REACT et NEXT.JS.</li>
            <li>Optimisation UX/UI avec CHART.JS et SWIPER.JS.</li>
            <li>Sécurisation des accès utilisateurs avec Firebase et API NEXT.JS.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-2xl font-semibold text-gray-800">Développeur Frontend - Antit, Costa Rica</h4>
          <p className="text-gray-600">Septembre 2020 - Mai 2022</p>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            <li>Développement frontend pour divers projets en React et d&apos;autres technologies web modernes.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800">Soft Skills</h3>
        <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
          <li>Méthodologies agiles</li>
          <li>Esprit analytique</li>
          <li>Travail d&apos;équipe</li>
          <li>Résolution des problèmes</li>
        </ul>
      </section>

      {/* Languages Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800">Langues</h3>
        <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
          <li>Français</li>
          <li>Espagnol</li>
          <li>Anglais</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800">Éducation</h3>
        <p className="mt-4 text-lg text-gray-700">
          <strong>Licence Développeur web</strong> - Digital Campus - Paris
        </p>
      </section>

      {/* Technologies Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800">Technologies</h3>
        <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
          <li>Javascript, React, Redux, Nodejs, Nextjs, Express</li>
          <li>MySQL, MongoDB</li>
          <li>Tailwind CSS</li>
          <li>Firebase, Stripe</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
