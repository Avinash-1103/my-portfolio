import React from 'react'

export default function Resume() {
  return (
    <section id="resume" className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Resume</h2>
      <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow ring-1 ring-gray-100 dark:ring-gray-700">
        <h3 className="font-semibold">Education</h3>
        <p className="mt-2">MCA · Bharati Vidyapeeth (Y.M.I.M.), Pune · 2023 - 2025</p>
        <p className="mt-2">BCA · Bharati Vidyapeeth (Y.M.I.M.), Karad · CGPA: 8.06</p>
        <div className="mt-4">
          <a href="/resume.pdf" download className="inline-block px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black">Download PDF</a>
        </div>
      </div>
    </section>
  )
}
