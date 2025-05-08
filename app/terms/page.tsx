"use client";
import React from "react";

const TermsPage: React.FC = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-white">Conditions Générales d&apos;Utilisation</h1>
      <p className="mb-4">
        En accédant à ce site, vous acceptez d&apos;être lié par ces conditions générales d&apos;utilisation,
        toutes les lois et réglementations applicables, et vous acceptez que vous êtes responsable du respect
        de toutes les lois locales en vigueur.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Utilisation du site</h2>
      <p className="mb-4">
        Le contenu de ce site est fourni à titre informatif. Vous ne pouvez pas utiliser ce contenu à des fins
        commerciales sans l&apos;autorisation écrite préalable du propriétaire du site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Propriété intellectuelle</h2>
      <p className="mb-4">
        Tous les éléments du site (textes, images, logos, etc.) sont protégés par les droits d&apos;auteur.
        Toute reproduction ou utilisation sans autorisation est strictement interdite.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Limitations</h2>
      <p className="mb-4">
        Le propriétaire du site ne pourra être tenu responsable des dommages résultant de l&apos;utilisation ou
        de l&apos;impossibilité d&apos;utiliser les éléments de ce site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Modifications</h2>
      <p className="mb-4">
        Les présentes conditions peuvent être modifiées à tout moment sans préavis. En continuant d&apos;utiliser
        le site, vous acceptez d&apos;être lié par la version actuelle des conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Contact</h2>
      <p className="mb-4">
        Pour toute question relative à ces conditions, vous pouvez me contacter à l&apos;adresse suivante :{" "}
        <a href="mailto:aacpariscr@gmail.com" className="text-blue-600 hover:underline">
          aacpariscr@gmail.com
        </a>.
      </p>

      <p className="mt-10 text-sm text-gray-500">Dernière mise à jour : Mai 2025</p>
    </main>
  );
};

export default TermsPage;
