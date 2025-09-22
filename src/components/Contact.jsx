import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow ring-1 ring-gray-100 dark:ring-gray-700">
        <p className="mt-2">📧 Email: <a href="mailto:avinashnalawade0007@gmail.com" className="underline">avinashnalawade0007@gmail.com</a></p>
        <p className="mt-2">💼 LinkedIn: <a href="https://www.linkedin.com/in/avinash-nalawade-648b19278" target="_blank" rel="noreferrer" className="underline">linkedin.com/in/avinash-nalawade</a></p>
        <p className="mt-2">👨‍💻 GitHub: <a href="https://github.com/Avinash-1103" target="_blank" rel="noreferrer" className="underline">github.com/Avinash-1103</a></p>
      </div>
    </section>
  )
}
