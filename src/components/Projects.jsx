import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: "OTT Platform",
    desc: "React-based OTT platform leveraging TMDB API for live movie and show data.",
    tech: ["React.js", "API", "TailwindCSS"],
    link: "https://github.com/Avinash-1103/OTT-PLATFORM-IN-REACT/tree/main/PROJECT"
  },
  {
    id: 2,
    title: "Car Insurance Claim Prediction",
    desc: "Machine learning model predicting claim likelihood with 80% accuracy.",
    tech: ["Python", "ML", "Pandas", "Matplotlib"],
    link: "https://github.com/Avinash-1103/Car-insurance-claim-prediction"
  },
  {
    id: 3,
    title: "Movie Ticket Booking System",
    desc: "A Java + SQLite based booking system with real-time updates and secure transactions.",
    tech: ["Java", "SQLite"],
    link: "https://github.com/Avinash-1103/Movie-Ticket-Booking-System-"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      {/* Title + "See all projects..." button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <Link
          to="/projects"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          {/* See all projects... */}
        </Link>
      </div>

      {/* Projects grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((p) => (
          <motion.a
            key={p.id}
            whileHover={{ scale: 1.03 }}
            className="block p-5 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-lg ring-1 ring-gray-100 dark:ring-gray-700"
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <div className="text-sm opacity-70">#{p.id}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
