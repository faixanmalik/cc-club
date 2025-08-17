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
          Premium dark design, yellow highlights,<span className="text-yellow-400"> responsive</span> & fast.
        </h2>
        <p className="mt-3 text-neutral-300 max-w-2xl">
          Use this template for a <span className="font-semibold">legal</span> digital store: memberships, templates, courses, support plans—anything compliant. Smooth animations, modern UI, and a clean purchase flow.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-300">
          <Badge>Mobile‑first</Badge>
          <Badge>Click‑outside modal</Badge>
          <Badge>Framer Motion</Badge>
          <Badge>SEO‑friendly</Badge>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero