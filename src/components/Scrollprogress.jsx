import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleY: scrollYProgress,
        transformOrigin: "top",
      }}
      className="fixed right-4 top-0 h-screen w-[4px] bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.6)] z-[100]"
    />
  );
}
