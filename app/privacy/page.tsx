"use client";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6 text-white">Politique de confidentialité</h1>
      <p className="mb-4">
        Cette politique de confidentialité décrit comment les informations personnelles sont collectées,
        utilisées et partagées lorsque vous visitez ce site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Collecte des informations</h2>
      <p className="mb-4">
        Ce site personnel ne collecte pas activement de données personnelles. Aucune inscription, connexion
        ou formulaire n&apos;est requis pour naviguer sur le site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Données d&apos;analyse</h2>
      <p className="mb-4">
        Des outils d&apos;analyse comme Google Analytics peuvent être utilisés pour collecter des données anonymes
        sur l&apos;utilisation du site (pages visitées, durée, localisation générale, etc.). Ces données sont
        utilisées uniquement pour améliorer le contenu et l&apos;expérience utilisateur.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Partage des données</h2>
      <p className="mb-4">
        Aucune donnée personnelle n&apos;est vendue ou partagée à des tiers. Les données de navigation anonymes
        peuvent être partagées avec des outils tiers à des fins d&apos;analyse uniquement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Sécurité</h2>
      <p className="mb-4">
        Le site est hébergé sur des plateformes sécurisées, et toutes les communications sont chiffrées via HTTPS.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Vos droits</h2>
      <p className="mb-4">
        Conformément au RGPD, vous avez le droit d&apos;accéder, de rectifier ou de supprimer vos données
        personnelles, le cas échéant. Vous pouvez me contacter à l&apos;adresse suivante :{" "}
        <a href="mailto:aacpariscr@gmail.com" className="text-blue-600 hover:underline">
          aacpariscr@gmail.com
        </a>.
      </p>

      <p className="mt-10 text-sm text-gray-500">Dernière mise à jour : Mai 2025</p>
    </main>
  );
};

export default PrivacyPolicy;
