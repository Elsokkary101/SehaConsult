"use client";

import { useState } from "react";
import Logo from "../app/images/navbar.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "contact", name: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/80 text-white backdrop-blur-md  sticky top-0 z-50">
      <div className="container mx-auto px-16 ">
        <div className="flex justify-between items-center py-4">
          <Image
            src={Logo}
            alt="SEHACON Logo"
            width={150}
            height={50}
            className="w-auto h-12"
          />
          <div className="hidden md:flex space-x-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                {section.name}
              </a>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="text-teal-500" />
            ) : (
              <Menu className="text-teal-500" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block py-2 px-4 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-500 transition-colors"
              onClick={toggleMenu}
            >
              {section.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
