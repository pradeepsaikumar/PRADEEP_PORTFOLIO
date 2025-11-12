import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Flight Delay Prediction — GRNN & LightGBM",
      description:
        "Developed a hybrid AI system using Graph Recurrent Neural Networks and LightGBM to predict flight delays. Includes temporal graph modeling and feature engineering for high accuracy.",
      image: "/projects/flight_ai.png",
      fallback:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "GRNN", "LightGBM", "Deep Learning"],
      github: "https://github.com/pradeepsaikumar/flight-delay-prediction",
      demo: "https://deeprapitit.onrender.com/",
      category: "AI",
    },
    {
      title: "Image-to-Video Generator (Body Motion AI)",
      description:
        "Neural pipeline that generates short body-motion videos from static images using pose estimation and generative models — great for proof-of-concept motion synthesis.",
      image: "/projects/image2video.png",
      fallback:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
      tech: ["PyTorch", "OpenCV", "GANs", "MediaPipe"],
      github: "https://github.com/pradeepsaikumar/image-to-video-generator",
      demo: "https://your-video-ai-demo.vercel.app/",
      category: "AI",
    },
    {
      title: "DeepRAPIT Solutions — Startup Website",
      description:
        "Business-facing website for DeepRAPIT showcasing AI services, portfolio and contact flows. Built responsive components, animations and forms.",
      image: "/projects/deeprapit.png",
      fallback:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      tech: ["React", "Tailwind", "Framer Motion", "EmailJS"],
      github: "https://github.com/pradeepsaikumar/startup",
      demo: "https://deeprapatit.onrender.com/",
      category: "Web",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This portfolio — built with React, Tailwind and Framer Motion — featuring a cinematic hero, animated sections and a modern UI to showcase AI & web projects.",
      image: "/projects/portfolio_ui.png",
      fallback:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/pradeepsaikumar/portfolio",
      demo: "https://your-portfolio-demo-link.com",
      category: "Web",
    },
    {
      title: "Meghana Engineering Works — Static Website",
      description:
        "Static, responsive business website for a welding & fabrication shop — clear service pages, contact info and mobile-first design.",
      image: "/projects/meghana_workshop.png",
      fallback:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      github: "https://github.com/pradeepsaikumar/Meghana_engineering_works",
      demo: "https://meghana-engineering-works.vercel.app/",
      category: "Business",
    },
  ];

  const filters = ["All", "AI", "Web", "Business"];
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-6 py-24 overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-150px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]"
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        My Projects 💻
      </motion.h2>

      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {filters.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === category
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl z-10">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.5)" }}
              className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-lg transition-all duration-300"
            >
              {/* image with fallback */}
              <div className="overflow-hidden h-56 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    if (e.currentTarget.src !== project.fallback) e.currentTarget.src = project.fallback;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.6)" }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 hover:bg-blue-600/30 text-white text-sm transition-all duration-300"
                  >
                    <Github className="w-4 h-4" /> Code
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147,51,234,0.6)" }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 hover:bg-purple-600/30 text-white text-sm transition-all duration-300"
                  >
                    <Globe className="w-4 h-4" /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
