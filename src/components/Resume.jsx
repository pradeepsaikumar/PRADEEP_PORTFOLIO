import React from 'react'
import { motion } from 'framer-motion'

export default function Resume(){
  return (
    <section id="resume" className="max-w-6xl mx-auto px-6 py-12">
      <motion.h2 className="text-3xl font-bold mb-6" initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}}>Resume</motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} className="card p-6 rounded-lg">
          <h3 className="font-semibold text-lg">Education</h3>
          <ul className="mt-3 text-sm text-gray-300 space-y-2">
            <li><strong>B.Tech (CSE)</strong> — Baba Institute of Technology and Sciences (2021-2025). GPA: 8.16/10</li>
            <li><strong>PUC</strong> — Vidya Vikas Junior College. GPA: 8.2/10</li>
            <li><strong>SSC</strong> — Prathibha English Medium School. GPA: 9.7/10</li>
          </ul>
        </motion.div>

        <motion.div initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}} className="card p-6 rounded-lg">
          <h3 className="font-semibold text-lg">Internships</h3>
          <div className="mt-3 text-sm text-gray-300 space-y-3">
            <div><strong>Machine Learning Intern</strong> — Datapro (Dec 2024 – May 2025): Built flight delay prediction models (GRNN + LightGBM) achieving ~99% accuracy.</div>
            <div><strong>DevOps Intern</strong> — Lomaa IT Solutions (May 2024 – Jul 2024): Automated CI/CD with Jenkins & Docker; Terraform for AWS infra.</div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 flex gap-3">
        <a href="/resume.pdf" className="px-4 py-2 border border-gray-700 rounded-md">Download PDF</a>
        <a href="mailto:pallempradeepsaikumar07@gmail.com" className="btn-glow px-4 py-2">Email Me</a>
      </div>
    </section>
  )
}
