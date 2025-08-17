import React, { useMemo } from 'react'

const Footer = () => {

  const year = useMemo(() => new Date().getFullYear(), []);
  
  return (
    <footer className="border-t border-neutral-800 py-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-400">
        <p>© {year} CC Club. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer