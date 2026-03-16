"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaCheck, FaExternalLinkAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { AppDispatch, RootState } from "../store/store";
import { addReview, fetchReviews, Review } from "../store/reviewSlice";
import { useLang } from "../context/LanguageContext";

// ─── Data ───────────────────────────────────────────────────────────────────

const serviceCards = [
  {
    icon: "💻",
    titleKey: "servicespage.s1.title",
    descKey: "servicespage.s1.desc",
    features: ["servicespage.s1.f1", "servicespage.s1.f2", "servicespage.s1.f3", "servicespage.s1.f4"],
    accent: "from-blue-500/20 to-blue-600/5 border-blue-500/25",
    iconBg: "bg-blue-500/20 text-blue-400",
    glow: "shadow-blue-500/10",
  },
  {
    icon: "🤖",
    titleKey: "servicespage.s2.title",
    descKey: "servicespage.s2.desc",
    features: ["servicespage.s2.f1", "servicespage.s2.f2", "servicespage.s2.f3", "servicespage.s2.f4"],
    accent: "from-purple-500/20 to-purple-600/5 border-purple-500/25",
    iconBg: "bg-purple-500/20 text-purple-400",
    glow: "shadow-purple-500/10",
    badge: "⭐ Jumper Enterprise",
  },
  {
    icon: "🛒",
    titleKey: "servicespage.s3.title",
    descKey: "servicespage.s3.desc",
    features: ["servicespage.s3.f1", "servicespage.s3.f2", "servicespage.s3.f3", "servicespage.s3.f4"],
    accent: "from-green-500/20 to-green-600/5 border-green-500/25",
    iconBg: "bg-green-500/20 text-green-400",
    glow: "shadow-green-500/10",
  },
  {
    icon: "🧠",
    titleKey: "servicespage.s4.title",
    descKey: "servicespage.s4.desc",
    features: ["servicespage.s4.f1", "servicespage.s4.f2", "servicespage.s4.f3", "servicespage.s4.f4"],
    accent: "from-orange-500/20 to-orange-600/5 border-orange-500/25",
    iconBg: "bg-orange-500/20 text-orange-400",
    glow: "shadow-orange-500/10",
  },
];

const processSteps = [
  { num: "01", titleKey: "servicespage.process.s1", descKey: "servicespage.process.s1.desc", icon: "🎯" },
  { num: "02", titleKey: "servicespage.process.s2", descKey: "servicespage.process.s2.desc", icon: "✏️" },
  { num: "03", titleKey: "servicespage.process.s3", descKey: "servicespage.process.s3.desc", icon: "⚡" },
  { num: "04", titleKey: "servicespage.process.s4", descKey: "servicespage.process.s4.desc", icon: "🚀" },
];

// ─── Main Component ──────────────────────────────────────────────────────────

const ServicesPage = () => {
  const { t } = useLang();
  const dispatch = useDispatch<AppDispatch>();
  const { reviews, loading, error } = useSelector((state: RootState) => state.reviews);

  const [newReview, setNewReview] = useState<Review>({ name: "", rating: 5, comment: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const handleSubmit = async () => {
    if (!newReview.name.trim() || !newReview.comment.trim()) return;
    try {
      if (reviews.some((r) => r.name === newReview.name)) {
        setErrorMessage(t("lang.switch") === "ES" ? "Vous avez déjà laissé un avis." : "Ya dejaste una opinión.");
        setModalOpen(true);
        return;
      }
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(addReview(newReview));
        setSuccessMessage(t("lang.switch") === "ES" ? "Avis ajouté avec succès !" : "¡Opinión añadida con éxito!");
        setNewReview({ name: "", rating: 5, comment: "" });
        setModalOpen(true);
      } else {
        setErrorMessage(data.message || "Erreur");
        setModalOpen(true);
      }
    } catch {
      setErrorMessage("Erreur de connexion");
      setModalOpen(true);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 transition-all";

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Ambient glows */}
      <div className="fixed top-1/4 -left-48 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/3 -right-48 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.07)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-400 border border-green-500/30 bg-green-500/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {t("servicespage.hero.tag")}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-5 leading-tight">
              {t("servicespage.hero.title")}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("servicespage.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://jumperenterprise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:opacity-90 transition-all text-sm sm:text-base"
              >
                {t("servicespage.hero.cta.main")} <FaExternalLinkAlt size={11} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-600 text-gray-200 font-bold rounded-xl hover:border-blue-500/50 hover:text-blue-300 transition-all text-sm sm:text-base"
              >
                {t("servicespage.hero.cta.contact")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {t("servicespage.offer.title")}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">{t("servicespage.offer.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceCards.map(({ icon, titleKey, descKey, features, accent, iconBg, glow, badge }, i) => (
              <motion.div
                key={titleKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-gradient-to-br ${accent} border rounded-2xl p-6 hover:shadow-xl ${glow} transition-all`}
              >
                {badge && (
                  <span className="absolute top-4 right-4 text-xs font-semibold text-purple-300 border border-purple-500/30 bg-purple-500/15 px-2.5 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{t(titleKey)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{t(descKey)}</p>
                <ul className="space-y-2">
                  {features.map((fKey) => (
                    <li key={fKey} className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCheck className="text-green-400 flex-shrink-0" size={11} />
                      {t(fKey)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jumper Enterprise CTA banner ── */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-900/50 via-gray-900 to-blue-900/40 border border-purple-500/30 rounded-2xl p-8 sm:p-10 overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.12)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <span className="text-xs font-semibold text-purple-400 border border-purple-500/30 bg-purple-500/10 px-3 py-1 rounded-full">
                Startup · IA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 mb-3">
                Jumper Enterprise
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
                {t("lang.switch") === "ES"
                  ? "Ma startup spécialisée en automatisation IA pour les entreprises. Agents intelligents pour ventes, marketing, support et e-commerce. Fonctionnement 24/7, sans intervention humaine."
                  : "Mi startup especializada en automatización IA para empresas. Agentes inteligentes para ventas, marketing, soporte y e-commerce. Funcionamiento 24/7, sin intervención humana."}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["Agente Ventas Pro", "Agente Google Reviews", "Agente Citas", "Blog SEO", "Manager E-Commerce"].map((a) => (
                  <span key={a} className="text-xs px-2.5 py-1 bg-purple-500/15 border border-purple-500/25 text-purple-200 rounded-lg">
                    {a}
                  </span>
                ))}
              </div>
              <a
                href="https://jumperenterprise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-500/20 text-sm"
              >
                jumperenterprise.com <FaExternalLinkAlt size={11} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-16 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-12"
          >
            {t("servicespage.process.title")}
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map(({ num, titleKey, descKey, icon }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-2xl mb-3 text-2xl">
                  {icon}
                  <span className="absolute -top-2 -right-2 text-[10px] font-bold text-blue-400 bg-gray-900 border border-blue-500/30 rounded-full w-5 h-5 flex items-center justify-center">
                    {num.replace("0", "")}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{t(titleKey)}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{t(descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-16 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-10"
          >
            {t("servicespage.reviews.title")}
          </motion.h2>

          {loading && (
            <p className="text-center text-gray-400 text-sm">{t("servicespage.reviews.loading")}</p>
          )}
          {error && <p className="text-center text-red-400 text-sm">{error}</p>}

          {/* Reviews grid */}
          {Array.isArray(reviews) && reviews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {reviews.map((review) => (
                <motion.div
                  key={review._id || review.name + review.createdAt}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-500/30 transition-colors"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={13}
                        className={i < review.rating ? "text-yellow-400" : "text-gray-600"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {(review.name || "A").charAt(0).toUpperCase()}
                    </div>
                    <span className="text-white text-sm font-semibold">{review.name || "Anonyme"}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            !loading && (
              <p className="text-center text-gray-500 text-sm mb-12">
                {t("servicespage.reviews.empty")}
              </p>
            )
          )}

          {/* Review form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-white font-bold text-lg mb-6">
              {t("servicespage.review.form.title")}
            </h3>

            {/* Star rating input */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                {t("servicespage.review.form.rating")}
              </label>
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={24}
                    className={`cursor-pointer transition-colors ${
                      i < (hoverRating || newReview.rating)
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                    onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                    onMouseEnter={() => setHoverRating(i + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  {t("servicespage.review.form.name")}
                </label>
                <input
                  type="text"
                  placeholder={t("servicespage.review.form.name.ph")}
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  {t("servicespage.review.form.comment")}
                </label>
                <textarea
                  placeholder={t("servicespage.review.form.comment.ph")}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:opacity-90 transition-all text-sm"
              >
                {t("servicespage.review.form.submit")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Modal
        message={successMessage || errorMessage}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ServicesPage;
