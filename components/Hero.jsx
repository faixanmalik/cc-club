import React from 'react'
import Badge from './Badge'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12 shadow-2xl shadow-black/30"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Premium Virtual Cards for <span className="text-yellow-400">Smart & Secure Payments</span>
        </h2>
        <p className="mt-3 text-neutral-300 max-w-2xl">
          Experience the freedom of instant, compliant, and reliable <span className="font-semibold">digital cards.</span> Built with a sleek dark design, yellow highlights, and a smooth purchase flow—perfect for <span className="font-semibold">memberships, templates, courses, or support plans.</span> 
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-300">
          <Badge>💳 Instant Virtual Card Setup</Badge>
          <Badge>🌍 Global Access</Badge>
          <Badge>⚡ Lightning-fast Transactions</Badge>
          <Badge>🔒 Bank-level Security & Compliance</Badge>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero