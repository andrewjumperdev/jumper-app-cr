"use client";
import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white text-gray-900 rounded-lg">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600 tracking-tight">
          Andrew Alfaro
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          Développeur Front-end
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          <span className="font-bold">Contact: </span>
          <a
            href="tel:+330749927546"
            className="text-blue-600 hover:text-blue-700 transition duration-300"
          >
            +33 07 49 92 75 46
          </a>
          <span className="mx-2">|</span>
          <a
            href="mailto:aacpariscr@gmail.com"
            className="text-blue-600 hover:text-blue-700 transition duration-300"
          >
            aacpariscr@gmail.com
          </a>
          <span className="mx-2">|</span> Antony, France
        </p>
        
      </header>

      {/* About Me Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800">
          À propos de moi
        </h3>
        <p className="mt-4 text-lg text-gray-700">
          Développeur web passionné avec plus de 3 ans d&apos;expérience dans la
          conception d&apos;applications web réactives et évolutives. Spécialisé
          en JavaScript, React, TypeScript, Node.js et intégration d&apos;APIs
          REST. Habitué à travailler en environnement Agile/Scrum avec des
          résultats mesurables. Excellentes compétences en communication,
          autonomie et résolution de problèmes. À la recherche d&apos;un poste
          stimulant dans une équipe innovante.
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800">
          EXPÉRIENCE PROFESSIONNELLE
        </h3>

        <div className="mt-6">
          <h4 className="text-2xl font-semibold text-gray-800">
            LEAD DEVELOPER FRONTEND | SAMANJO, PARIS
          </h4>
          <p className="text-gray-600">10/2024 – 05/2025</p>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            <li>
              Conception et développement de A à Z d&apos;une application web
              e-commerce B2B modulaire avec REACT, NEXT.JS et TAILWIND CSS,
              offrant une architecture performante et évolutive.
            </li>
            <li>
              Optimisation UX/UI grâce à l&apos;intégration de bibliothèques
              dynamiques, dont CHART.JS (visualisation de données) et SWIPER.JS
              (carrousels interactifs).
            </li>
            <li>
              Sécurisation des accès utilisateurs via une authentification
              multi-facteurs : Firebase pour les comptes clients et avec API
              NEXT.JS pour les administrateurs.
            </li>
            <li>
              Création backend pour automatiser les paiements avec STRIPE pour
              les transactions de carte bleue et les prélèvements SEPA.
            </li>
            <li>
              Développement d&apos;un design responsive mobile-first,
              garantissant une expérience fluide sur tous les appareils grâce à
              Tailwind CSS.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-2xl font-semibold text-gray-800">
            DÉVELOPPEUR FRONTEND & BACKEND | WANHAO, PARIS
          </h4>
          <p className="text-gray-600">10/2023 – 09/2024</p>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            <li>
              Développement et déploiement de &apos;Yumi Sync Service&apos;, un
              outil d&apos;automatisation pour le suivi et la synchronisation
              des modifications de fichiers entre Raspberry Pi et un serveur
              central.
            </li>
            <li>
              {" "}
              Migration et modernisation du site web en une version responsive
              et facile d&apos;utilisation, provoquant une augmentation des
              ventes de 70% et améliorant la satisfaction des clients grâce à
              une expérience utilisateur optimisée.
            </li>
            <li>
              {" "}
              Programmation de scripts PYTHON pour gérer les changements des
              dispositifs Raspberry Pi et générer des rapports détaillés.
            </li>
            <li>
              {" "}
              Conception d&apos;une application backend avec EXPRESS.JS pour le
              traitement sécurisé des téléchargements et la gestion des données
              via des identifiants uniques (adresses MAC et tokens).
            </li>
            <li>
              Contribution clé au projet open source Yumi Lab, en améliorant les
              fonctionnalités et en optimisant la performance du software.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-2xl font-semibold text-gray-800">
            DÉVELOPPEUR JAVASCRIPT | BOBOCHIC, PARIS
          </h4>
          <p className="text-gray-600">07/2022 – 09/2023</p>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            <li>
              Développement d&apos;un web scraper avancé pour collecter et
              analyser des données de benchmark depuis la base de données
              PRESTASHOP, fournissant des insights stratégiques pour
              l&apos;équipe. Contribuer à la préparation des rapports de mission
              et à l'évaluation des performances des systèmes de propulsion.
            </li>
            <li>
              Automatisation des processus d&apos;intégration des données
              produits avec NODE.JS, incluant l&apos;injection automatisée et la
              détection des erreurs, assurant la fiabilité et l&apos;exactitude
              des données.
            </li>
            <li>
              Création de scripts PYTHON sur mesure pour automatiser les tâches
              répétitives, augmentant la productivité de l&apos;équipe et
              optimisant leur temps pour des missions à plus forte valeur
              ajoutée. .
            </li>
          </ul>
        </div>

        {/* <div className="mt-6">
          <h4 className="text-2xl font-semibold text-gray-800">
            Développeur Frontend - Antit, Costa Rica
          </h4>
          <p className="text-gray-600">Septembre 2020 - Mai 2022</p>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            <li>
              Développement frontend pour divers projets en React et
              d&apos;autres technologies web modernes.
            </li>
          </ul>
        </div> */}
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
          <strong>Licence Développeur Web</strong> - Digital Campus - Paris
        </p>
        <p className="mt-4 text-lg text-gray-700">
          <strong>Développement Web B+2</strong> - Université du Costa Rica
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
      <section className="text-center mb-12">
        <a
          href="Andrew Alfaro.pdf"
          download="Andrew_Alfaro_CV.pdf"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-700 transition duration-300"
        >
          Télécharger le CV
        </a>
      </section>
    </div>

    
  );
};

export default Resume;
