import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);

    // Update active section based on scroll
    const sections = ["home", "about", "projects", "skills", "contact"];
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("home")}
        >
          PALLEM PRADEEP SAI KUMAR<span className="text-gray-300">.</span>
        </motion.h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`relative font-medium text-sm uppercase tracking-wide transition-all duration-300 ${
                  active === link.id
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-[-6px] h-[2px] w-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (optional later) */}
      </div>
    </motion.nav>
  );
}
