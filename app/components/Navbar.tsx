'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-gray-900/80 backdrop-blur-lg shadow-lg" : "bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center py-4">
        <Link href="/" className="text-white font-bold text-2xl tracking-wide">
          Andrew
        </Link>
        <button
          className="md:hidden text-white focus:outline-none transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex md:items-center md:space-x-6 
          transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row text-center md:text-left md:space-x-6 font-medium text-lg">
            {["About", "Resume", "Projects", "Contact", "Blog"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="block py-3 md:py-0 px-6 md:px-0 text-gray-100 hover:text-blue-500 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

