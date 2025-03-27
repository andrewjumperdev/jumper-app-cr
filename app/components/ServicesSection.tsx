import Link from "next/link";

const ServicesSection = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <section
        id="services"
        className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-xl shadow-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent blur-3xl opacity-40 -z-10"></div>

        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Mes Services
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
            En tant que développeur freelance et consultant, j&apos;offre des services personnalisés pour répondre à vos besoins technologiques. Que vous ayez besoin de développement web, d&apos;automatisation de processus ou de conseils en stratégie technologique, je suis là pour vous aider à atteindre vos objectifs.
          </p>

          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white text-lg font-bold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 ease-out transform hover:scale-105"
          >
            En savoir plus
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
