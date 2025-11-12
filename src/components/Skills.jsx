import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, Database, Cloud, TerminalSquare } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <Cpu className="w-10 h-10 text-blue-400 mx-auto" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "LightGBM", "OpenCV", "Graph Neural Networks"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Full Stack Development",
      icon: <Code2 className="w-10 h-10 text-pink-400 mx-auto" />,
      skills: ["React.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion", "Bootstrap"],
      gradient: "from-pink-500 to-purple-600",
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-10 h-10 text-green-400 mx-auto" />,
      skills: ["MongoDB", "MySQL", "Postman", "VS Code", "Git & GitHub"],
      gradient: "from-green-500 to-cyan-500",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-10 h-10 text-yellow-400 mx-auto" />,
      skills: ["AWS", "Docker", "Jenkins", "Linux", "CI/CD Pipelines"],
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Programming Languages",
      icon: <TerminalSquare className="w-10 h-10 text-purple-400 mx-auto" />,
      skills: ["Python", "C", "C++", "JavaScript", "SQL"],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-6 py-24 overflow-hidden"
    >
      {/* Background motion blobs */}
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

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]"
      >
        Technical Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 25px rgba(147,51,234,0.6)`,
            }}
            className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-pointer group"
          >
            {/* Hover glow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cat.gradient} blur-2xl`}
            />
            <div className="relative z-10">
              {cat.icon}
              <h3 className="text-xl font-bold mt-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                {cat.skills.map((skill, idx) => (
                  <li key={idx} className="hover:text-white transition duration-200">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
