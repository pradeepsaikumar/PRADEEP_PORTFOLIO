import React from "react";
import { motion } from "framer-motion";
import { Download, Code, Brain, Cpu } from "lucide-react";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white px-6 py-20 overflow-hidden"
    >
      {/* Background glowing blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-150px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 max-w-3xl text-center mt-10 text-gray-300 text-lg leading-relaxed"
      >
        <p className="mb-6">
          I’m <span className="text-blue-400 font-semibold">Pallem Pradeep Sai Kumar</span>, a
          passionate <span className="text-purple-400 font-semibold">Machine Learning Engineer</span> and{" "}
          <span className="text-pink-400 font-semibold">Full-Stack Developer</span> who loves building
          intelligent, interactive, and visually creative digital experiences.
        </p>

        <p>
          My curiosity drives me to merge{" "}
          <span className="text-blue-400 font-semibold">AI, Deep Learning</span>, and{" "}
          <span className="text-purple-400 font-semibold">3D Web Technologies</span> to craft next-gen
          solutions — from predictive systems to motion-based UIs. Currently, I’m focusing on{" "}
          <span className="text-pink-400 font-semibold">Computer Vision</span> and{" "}
          <span className="text-blue-400 font-semibold">Generative AI</span> projects that push creative boundaries.
        </p>
      </motion.div>

      {/* Tech Stack Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center"
      >
        {[
          { icon: <Brain className="w-10 h-10 text-blue-400 mx-auto" />, name: "Machine Learning" },
          { icon: <Cpu className="w-10 h-10 text-purple-400 mx-auto" />, name: "Deep Learning" },
          { icon: <Code className="w-10 h-10 text-pink-400 mx-auto" />, name: "Full Stack Dev" },
          { icon: <Download className="w-10 h-10 text-blue-300 mx-auto" />, name: "React + Tailwind" },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 30px rgba(147,51,234,0.6)",
              borderColor: "rgba(147,51,234,0.4)",
            }}
            className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-md 
                       hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            {/* Hover glow ring */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl"
            />
            <div className="relative z-10">{item.icon}</div>
            <p className="mt-3 text-gray-200 font-medium relative z-10">{item.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-16 flex flex-wrap gap-6 justify-center"
      >
        {/* Download Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1F3M1L50UkuvpTc4tBuF8loNLODDRePbZ/view?usp=drivesdk"
          download
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(59,130,246,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-8 py-3 text-lg font-semibold rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
          <span className="relative text-white drop-shadow-md group-hover:text-white">
            Download Resume 📄
          </span>
        </motion.a>

        {/* Collaborate Button */}
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(236,72,153,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-8 py-3 text-lg font-semibold rounded-full overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.6)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
          <span className="relative text-white drop-shadow-md group-hover:text-white">
            Let’s Collaborate 🤝
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
