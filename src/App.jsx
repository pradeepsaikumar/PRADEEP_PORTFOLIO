import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000); // Hide after 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* Cinematic Welcome Screen */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-[#0f172a] to-black text-white overflow-hidden"
          >
            {/* Glowing Gradient Background Blobs */}
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl top-[-150px] left-[-150px]"
            />
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl bottom-[-200px] right-[-200px]"
            />

            {/* Animated Title */}
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              Welcome to My Portfolio
            </motion.h1>

            {/* Shimmering Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "220px" }}
              transition={{ duration: 1.5, delay: 1 }}
              className="h-[3px] mt-5 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 rounded-full"
            />

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-gray-300 mt-6 text-lg"
            >
              Let’s craft something amazing together ✨
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-16 text-gray-400 text-sm"
            >
              ↓ Scroll to Explore
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content */}
      {!showWelcome && (
        <>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
