"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const ServicesSection = () => {
  const { t } = useLang();

  const services = [
    {
      icon: "💻",
      titleKey: "services.web.title",
      descKey: "services.web.desc",
      tags: ["React", "Next.js", "Node.js", "TypeScript"],
      color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
      iconBg: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: "🤖",
      titleKey: "services.ai.title",
      descKey: "services.ai.desc",
      tags: ["n8n", "Make", "OpenAI", "Python"],
      color: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
      iconBg: "bg-purple-500/20 text-purple-400",
    },
    {
      icon: "🛒",
      titleKey: "services.shopify.title",
      descKey: "services.shopify.desc",
      tags: ["Shopify", "Liquid", "Stripe", "SEPA"],
      color: "from-green-500/20 to-green-600/10 border-green-500/30",
      iconBg: "bg-green-500/20 text-green-400",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gray-700" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs sm:text-sm font-semibold text-blue-400 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-4 mb-3">
            {t("services.title")}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map(({ icon, titleKey, descKey, tags, color, iconBg }, i) => (
            <motion.div
              key={titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`bg-gradient-to-br ${color} border rounded-2xl p-6 hover:scale-[1.02] transition-transform`}
            >
              <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{t(titleKey)}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{t(descKey)}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-white/10 border border-white/10 text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:opacity-90 transition-all text-sm sm:text-base"
          >
            {t("services.cta")} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
