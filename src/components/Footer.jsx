import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-400 text-center overflow-hidden py-8 px-6">
      {/* Animated gradient line on top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[shimmer_3s_linear_infinite]"
      ></motion.div>

      {/* Glow background circle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl bottom-0 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Pallem Pradeep Sai Kumar
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          © {new Date().getFullYear()} Crafted with ❤️ using{" "}
          <span className="text-blue-400">React</span> &{" "}
          <span className="text-purple-400">Framer Motion</span>
        </p>

        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="mt-3 text-xs text-gray-500"
        >
          Designed for a Futuristic Web Experience ⚡
        </motion.div>
      </motion.div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </footer>
  );
}
