import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleScroll = (id) => {
    const scrollToSection = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToSection()
      }, 300) // wait for DOM to mount
    } else {
      scrollToSection()
    }

    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-xl font-semibold cursor-pointer"
          onClick={() => handleScroll('home')}
        >
          Avinash Nalawade
        </div>

        {/* Desktop Nav */}
        <nav className="top-0 hidden md:flex gap-6 items-center">
          <button onClick={() => handleScroll('about')} className="hover:underline capitalize">About</button>
          <Link to="/projects" className="hover:underline capitalize">Projects</Link>
          <button onClick={() => handleScroll('resume')} className="hover:underline capitalize">Resume</button>
          <button onClick={() => handleScroll('contact')} className="hover:underline capitalize">Contact</button>

          <a
            href="https://github.com/Avinash-1103"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.1 2.8.9.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2a11.2 11.2 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.6-2.8 5.6-5.4 5.9.5.4.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/avinash-nalawade-648b19278"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V9h3v10zM6.5 7.5C5.1 7.5 4 6.4 4 5s1.1-2.5 2.5-2.5S9 3.6 9 5s-1.1 2.5-2.5 2.5zM20 19h-3v-5c0-1.2 0-2.8-1.7-2.8S13 12.7 13 14v5h-3V9h2.9v1.4h.1c.4-.8 1.3-1.7 2.8-1.7 3 0 3.6 2 3.6 4.6V19z" />
            </svg>
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition"
            title="Toggle Dark Mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>


        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setDark(!dark)}>
            {dark ? '☀️' : '🌙'}
          </button>

          <motion.button
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-md ring-1 ring-gray-200 dark:ring-gray-800 flex flex-col justify-center items-center"
            animate={open ? "open" : "closed"}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-5 bg-current mb-1"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-5 bg-current mb-1"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-5 bg-current"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-4 py-4 space-y-4 overflow-hidden"
          >
            <button onClick={() => handleScroll('about')} className="block w-full text-left capitalize py-2">About</button>
            <Link to="/projects" className="block w-full text-left capitalize py-2" onClick={() => setOpen(false)}>Projects</Link>
            <button onClick={() => handleScroll('resume')} className="block w-full text-left capitalize py-2">Resume</button>
            <button onClick={() => handleScroll('contact')} className="block w-full text-left capitalize py-2">Contact</button>

            <div className="flex gap-4 pt-2">
              <a href="https://github.com/Avinash-1103" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/avinash-nalawade-648b19278" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
