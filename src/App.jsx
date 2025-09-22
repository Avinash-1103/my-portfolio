import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import AllProjects from './pages/AllProjects'

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div>
      <Navbar dark={dark} setDark={setDark} />
      <main className="pt-20">
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects /> {/* preview section */}
                <Resume />
                <Contact />
              </>
            }
          />

          {/* Separate Projects Page */}
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </main>
    </div>
  )
}
