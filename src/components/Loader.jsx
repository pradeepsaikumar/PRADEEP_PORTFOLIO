import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // Show for ~4 sec
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-slate-950 text-white z-[99999] overflow-hidden"
    >
      {/* Floating gradient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Rotating glowing circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="w-28 h-28 border-t-4 border-b-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mb-8 shadow-[0_0_35px_rgba(99,102,241,0.4)]"
      />

      {/* Terminal style text */}
      <div className="font-mono text-center">
        <TypeAnimation
          sequence={[
            "Booting System...",
            1000,
            "Initializing Pradeep Sai Kumar...",
            1200,
            "Activating Neural Portfolio...",
            1000,
            "System Ready ✅",
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          className="text-lg md:text-2xl text-gray-300"
        />
      </div>

      {/* Progress bar */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
        className="mt-8 h-1 w-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
      />
    </motion.div>
  );
}
