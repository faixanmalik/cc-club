import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
        <h3 className="text-xl font-semibold">Contact Seller</h3>
        <p className="mt-1 text-sm text-neutral-300">Have questions? Reach out directly.</p>
        <div className="mt-4">
          <a
            href="https://t.me/Jackwilliam019"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium bg-neutral-800 hover:bg-neutral-700 transition border border-neutral-700"
          >
            Open Telegram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact