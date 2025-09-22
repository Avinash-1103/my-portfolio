import React from 'react'
import { motion } from 'framer-motion'

const projects = [
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
    },
    // Later you can add more projects here
]

export default function AllProjects() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold">All Projects</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                A complete list of my projects with details and links.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <motion.a
                        key={p.id}
                        whileHover={{ scale: 1.03 }}
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block p-6 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-lg ring-1 ring-gray-100 dark:ring-gray-700"
                    >
                        <h3 className="text-xl font-semibold">{p.title}</h3>
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
