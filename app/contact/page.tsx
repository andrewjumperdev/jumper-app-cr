"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="flex mt-20 justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-white/20 rounded-full p-4 mb-4">
            <Image src="/img/logo-jumper.png" alt="Logo" width={80} height={80} className="rounded-full" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">Get in touch</h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Let&apos;s create something amazing together! 🚀
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold text-gray-200 mb-1 capitalize">{field.replace(/^\w/, (c) => c.toUpperCase())}</label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field === "phone" ? "(123) 456-7890" : `Enter your ${field}...`}
                required
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-gray-400 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              disabled={status === "submitting"}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-gray-400 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              rows={5}
            ></textarea>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            {status === "submitting" ? "Submitting..." : "Send Message"}
          </motion.button>

          {/* Status Messages */}
          {status === "success" && <p className="text-center text-green-400 mt-2">Message sent successfully!</p>}
          {status === "error" && <p className="text-center text-red-400 mt-2">Error sending message. Please try again.</p>}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
