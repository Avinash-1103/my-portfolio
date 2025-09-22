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
    {
        id: 4,
        title: "Flight Ticket Price Prediction",
        desc: "A machine learning project that predicts flight ticket prices based on features like airline, date of journey, source, and destination.",
        tech: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
        link: "https://github.com/Avinash-1103/Flight-ticket-price-prediction"
    },
    {
        id: 5,
        title: "Power BI Dashboards",
        desc: "A collection of interactive and insightful dashboards created using Power BI, focusing on sales data analysis.",
        tech: ["Power BI", "Data Visualization", "Business Intelligence"],
        link: "https://github.com/Avinash-1103/Power-BI-Dashboards"
    },
    {
        id: 6,
        title: "Hotel Billing System",
        desc: "A console-based hotel billing system developed in C, designed to manage room bookings and generate bills.",
        tech: ["C", "Console Application", "Billing System"],
        link: "https://github.com/Avinash-1103/Hotel-Billing-System"
    },
    {
        id: 7,
        title: "Thyroid Cancer Recurrence Prediction",
        desc: "A machine learning project aimed at predicting the recurrence of thyroid cancer using clinical and pathological data.",
        tech: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
        link: "https://github.com/Avinash-1103/Thyroid-Cancer-Recurrence-Prediction"
    },
    {
        id: 8,
        title: "Hotel Cancellation Prediction",
        desc: "A machine learning project aimed at predicting hotel booking cancellations based on various features.",
        tech: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
        link: "https://github.com/Avinash-1103/Hotel-cancelation-prediction"
    },
    {
        id: 9,
        title: "Shopez",
        desc: "A Django-based e-commerce API with modular structure, SQLite database, and customizable components.",
        tech: ["Django", "Python", "SQLite", "API", "Web Development"],
        link: "https://github.com/Avinash-1103/shopez"
    },
    {
        id: 10,
        title: "Insurance Service Website",
        desc: "A professional, modern, and responsive insurance service website built with React, Vite, TailwindCSS, and Framer Motion.",
        tech: ["React", "Vite", "TailwindCSS", "Framer Motion", "EmailJS"],
        link: "https://github.com/Avinash-1103/NPVenture"
    },
    {
        id: 1,
        title: "My Portfolio",
        desc: "A personal portfolio website showcasing skills, projects, and professional journey as a web developer.",
        tech: ["HTML", "CSS", "JavaScript", "Vite", "TailwindCSS"],
        link: "https://github.com/Avinash-1103/my-portfolio"
    }
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
