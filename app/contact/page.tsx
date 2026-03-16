"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaExternalLinkAlt,
} from "react-icons/fa";

const infoItems = [
  { icon: FaMapMarkerAlt, key: "contact.info.location", color: "text-blue-400" },
  { icon: FaClock, key: "contact.info.response", color: "text-green-400" },
  { icon: FaBriefcase, key: "contact.info.freelance", color: "text-purple-400" },
];

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/andrew-jumper/", label: "LinkedIn", color: "hover:text-blue-500" },
  { icon: FaGithub, href: "https://github.com/andrewjumperdev", label: "GitHub", color: "hover:text-white" },
  { icon: FaTwitter, href: "https://twitter.com/jumper_Develop", label: "Twitter", color: "hover:text-sky-400" },
];

const Contact = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all disabled:opacity-50";

  return (
    <section className="min-h-screen bg-gray-900 pt-24 pb-16 px-4 sm:px-6">
      {/* Background accents */}
      <div className="fixed top-1/3 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/3 -right-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-blue-400 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-4 mb-3">
            {t("contact.title")}
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Card: info */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <p className="text-green-400 text-sm font-semibold">
                  {t("contact.info.available")}
                </p>
              </div>

              <h2 className="text-white font-bold text-lg mb-5">
                {t("contact.info.title")}
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:aacpariscr@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <span className="w-9 h-9 bg-blue-500/15 border border-blue-500/25 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500/25 transition-colors flex-shrink-0">
                    <FaEnvelope size={14} />
                  </span>
                  <span className="text-sm">aacpariscr@gmail.com</span>
                </a>

                {infoItems.map(({ icon: Icon, key, color }) => (
                  <div key={key} className="flex items-center gap-3 text-gray-300">
                    <span className={`w-9 h-9 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center ${color} flex-shrink-0`}>
                      <Icon size={13} />
                    </span>
                    <span className="text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card: Jumper Enterprise */}
            <div className="bg-gradient-to-br from-purple-500/15 to-blue-500/10 border border-purple-500/30 rounded-2xl p-5">
              <p className="text-xs font-semibold text-purple-400 mb-1">Startup</p>
              <h3 className="text-white font-bold mb-1">Jumper Enterprise</h3>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                AI Solutions for Smarter Sales — agents IA pour automatiser vos ventes et marketing.
              </p>
              <a
                href="https://jumperenterprise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-purple-300 border border-purple-500/40 bg-purple-500/10 px-3 py-1.5 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold"
              >
                jumperenterprise.com <FaExternalLinkAlt size={9} />
              </a>
            </div>

            {/* Social links */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-gray-400 text-xs mb-4">Réseaux sociaux</p>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`text-gray-500 ${color} transition-colors`}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      {t("contact.name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.name.ph")}
                      required
                      disabled={status === "submitting"}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      {t("contact.email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.email.ph")}
                      required
                      disabled={status === "submitting"}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      {t("contact.phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact.phone.ph")}
                      disabled={status === "submitting"}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      {t("contact.subject")}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("contact.subject.ph")}
                      disabled={status === "submitting"}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    {t("contact.message")} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.message.ph")}
                    required
                    disabled={status === "submitting"}
                    rows={6}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm"
                  >
                    <span>✓</span> {t("contact.success")}
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm"
                  >
                    <span>✗</span> {t("contact.error")}
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      {t("contact.sending")}
                    </span>
                  ) : (
                    t("contact.send")
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
