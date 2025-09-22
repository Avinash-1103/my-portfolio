import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8 py-6 border-t dark:border-gray-800 text-center">
      © {new Date().getFullYear()} Avinash Nalawade. Built with React, Vite & TailwindCSS.
    </footer>
  )
}
