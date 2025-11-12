import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const roles = [
    "Full Stack Developer 💻",
    "React Enthusiast ⚛️",
    "Creative Coder 🚀",
  ];
  const [index, setIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(roles[index].slice(0, currentIndex++));
      if (currentIndex > roles[index].length) {
        clearInterval(interval);
        setTimeout(() => setIndex((prev) => (prev + 1) % roles.length), 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0b1228] to-black text-white px-8 md:px-20 py-24"
    >
      {/* Background glows */}
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full top-[-200px] left-[-200px]"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-3xl rounded-full bottom-[-200px] right-[-200px]"
      />

      {/* LEFT — Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-start text-left max-w-2xl space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <motion.span
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Pradeep Sai Kumar
          </motion.span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          A passionate{" "}
          <span className="text-blue-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          and{" "}
          <span className="text-purple-400 font-semibold">
            MERN Stack Enthusiast
          </span>{" "}
          eager to build dynamic, responsive, and user-centric web applications
          that blend modern design with solid backend logic.
        </p>

        {/* Typing animation */}
        <motion.p
          key={text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-lg font-semibold bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {text}
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-5 mt-4">
          {/* View My Work */}
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59,130,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300 shadow-[0_0_25px_rgba(147,51,234,0.4)]"
          >
            View My Work 🚀
          </motion.a>

          {/* Contact Me */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(236,72,153,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg font-semibold rounded-full border border-pink-400 text-pink-400 hover:bg-pink-500/20 backdrop-blur-md transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
          >
            Contact Me ✉️
          </motion.a>
        </div>
      </motion.div>

      {/* RIGHT — Image with glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-3xl mt-10 md:mt-0 flex justify-center items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md opacity-60"
        />
        <div className="relative w-full h-full rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <img
            src="/sai.png"
            alt="Pradeep Sai Kumar"
            className="w-full h-full object-cover rounded-[2rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
