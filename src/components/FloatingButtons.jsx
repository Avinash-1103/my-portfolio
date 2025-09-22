import React from 'react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a href="mailto:avinashnalawade0007@gmail.com" className="flex items-center gap-3 px-4 py-3 rounded-full bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-100 dark:ring-gray-700">
        Email
      </a>
      <a href="https://wa.me/917249060794" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-full bg-green-500 text-white shadow-lg">
        WhatsApp
      </a>
    </div>
  )
}
