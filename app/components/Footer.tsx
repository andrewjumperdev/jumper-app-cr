"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 mt-auto shadow-lg">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2025 Andrew Portafolio. Tous droits réservés.
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center sm:justify-start mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300 mx-2"
            >
              Privacy
            </Link>
            <span className="text-gray-500">·</span>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300 mx-2"
            >
              Terms
            </Link>
            <span className="text-gray-500">·</span>
            <Link
              href="/contact"
              className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300 mx-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
