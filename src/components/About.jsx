import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-8 rounded-2xl shadow bg-gradient-to-r from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4 leading-relaxed">
          I am a dynamic and results-driven MCA student with expertise in <b>data analysis, software development, and machine learning</b>.
          Proficient in SQL and React.js, with hands-on experience in creating user-centric applications, predictive models,
          and full-stack systems. Passionate about solving real-world problems using modern technologies.
        </p>
      </motion.div>
    </section>
  )
}
