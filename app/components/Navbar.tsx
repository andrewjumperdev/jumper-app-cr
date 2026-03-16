'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.about", href: "/about" },
    { key: "nav.resume", href: "/resume" },
    { key: "nav.projects", href: "/projects" },
    { key: "nav.services", href: "/services" },
    { key: "nav.contact", href: "/contact" },
    { key: "nav.blog", href: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-black/20"
          : "bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-white font-extrabold text-xl tracking-tight group-hover:text-blue-400 transition-colors">
            Andrew
          </span>
          <span className="text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-0.5 rounded-full">
            Dev
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ key, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {t(key)}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="/contact"
            className="ml-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            {lang === "fr" ? "Me contacter" : "Contactarme"}
          </Link>

          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === "fr" ? "es" : "fr")}
            className="ml-2 px-3 py-1.5 text-xs font-bold border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all"
            aria-label="Switch language"
          >
            {t("lang.switch")}
          </button>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "fr" ? "es" : "fr")}
            className="px-2.5 py-1 text-xs font-bold border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            {t("lang.switch")}
          </button>
          <button
            className="text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/98 backdrop-blur-lg border-t border-gray-800 px-4 py-3 space-y-1">
          {navItems.map(({ key, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 mt-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg"
          >
            {lang === "fr" ? "Me contacter" : "Contactarme"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
