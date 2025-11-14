import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../public/profile.png'; // adjust path as needed

const skills = [
  "Python", "Java", "React.js", "SQL", "MongoDB",
  "Power BI", "Pandas", "NumPy", "Matplotlib", "Seaborn"
];

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">Avinash Nalawade</h1>
        <p className="mt-4 text-lg md:text-xl">
          MCA Student · Data Analyst Intern · Full Stack & ML Enthusiast
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map(s => (
            <motion.span
              key={s}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm"
            >
              {s}
            </motion.span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href="resume.pdf"
            download="resume.pdf"
            className="inline-flex items-center px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black font-medium"
          >
            Download Resume
          </a>

          <button
            onClick={() => handleScroll('projects')}
            className="px-4 py-2 rounded-md ring-1"
          >
            See Projects
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="w-48 h-full md:w-64 md:h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
          <img
            src={profileImg}
            alt="Avinash Nalawade"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
