"use client";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto my-10 mt-20 p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-gradient mb-4">
          À propos de moi
        </h2>
        <p className="text-lg text-gray-600">
          Développeur fullstack avec un accent particulier sur le frontend, passionné
          par la création d&apos;interfaces utilisateurs modernes et performantes
          en utilisant les meilleures pratiques.
        </p>
      </div>

      {/* Sección de Introducción */}
      <section id="sobre-mi" className="mb-12">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Avec plus de 3 ans d&apos;expérience en développement web, j&apos;ai
            l&apos;opportunité de travailler sur une variété de projets, allant de la
            création d&apos;interfaces utilisateur responsives à l&apos;automatisation des
            processus métier. Mon expertise couvre le développement frontend, où j&apos;utilise
            des technologies modernes comme React, TypeScript et Tailwind CSS, ainsi que le
            développement backend avec Node.js et Express.
          </p>
          <p className="text-gray-600 mb-4">
            Mon utilisation de <strong>TypeScript</strong> dans tout mon stack m&apos;a permis
            de garantir une qualité de code supérieure, tout en assurant une meilleure
            maintenabilité et scalabilité des applications. TypeScript me permet d&apos;avoir une
            gestion stricte des types, ce qui réduit les erreurs et facilite la collaboration
            avec d&apos;autres développeurs dans des projets complexes.
          </p>
          <p className="text-gray-600 mb-4">
            En dehors du travail, je suis passionné par l&apos;apprentissage continu. J&apos;aime
            me tenir au courant des dernières tendances et je contribue activement à des projets
            open source. J&apos;ai également animé des ateliers pour partager mes connaissances
            et aider les autres à apprendre le développement web.
          </p>
          <p className="text-gray-600">
            En résumé, je suis un développeur fullstack, axé sur la création d&apos;expériences
            utilisateur exceptionnelles tout en ayant une solide maîtrise des technologies backend
            et frontend.
          </p>
        </div>
      </section>

      {/* Sección de Educación */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gradient text-center mb-6">
          Éducation
        </h3>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
            Licence Développeur web - Digital Campus, Paris
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
            Certification en développement web - Platzi, Costa Rica
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
            Ultime Python - Hola Mundo
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
            Formation en gestion de projets Agile - LinkedIn Learning
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
            Cisco CCNA - Infonet, Costa Rica
          </li>
        </ul>
      </section>

      {/* Redes Sociales */}
      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a
          className="text-gradient hover:opacity-80"
          href="https://twitter.com/jumper_Develop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          className="text-gradient hover:opacity-80"
          href="https://www.linkedin.com/in/andrew-jumper/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-gradient hover:opacity-80"
          href="https://github.com/andrewjumperdev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default About;
