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

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 mt-20 bg-white rounded-lg backdrop-blur-lg p-4">
        <div className="text-center mb-8">
          <div className="bg-gray-200 text-white rounded-full p-4 mb-4 inline-block">
              <Image src={'/img/logo-jumper.png'} alt="Logo" width={80} height={80}/>
          </div>
          <h1 className="text-3xl font-extrabold">Get in touch</h1>
          <p className="text-lg text-gray-600 mb-0">
            Let&apos;s work together!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <motion.form
              id="contactForm"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name..."
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="name@example.com"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(123) 456-7890"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your message here..."
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  className="w-full px-5 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={formStatus === "submitting"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {formStatus === "submitting" ? "Submitting..." : "Submit"}
                </motion.button>
              </div>

              {formStatus === "success" && (
                <p className="text-center mt-4 text-green-500">
                  Message sent successfully!
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-center mt-4 text-red-500">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
