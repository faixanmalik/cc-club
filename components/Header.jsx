import React from 'react'

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-yellow-400/20 ring-1 ring-yellow-400/40 grid place-items-center">
              <span className="text-yellow-400 font-black">CC</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-wide">CC Club</h1>
              <p className="text-xs text-neutral-400 -mt-0.5">Virtual Credit Cards, Gift Cards & Accounts</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#trial" className="hover:text-yellow-400 transition">Tiers</a>
            <a href="#regular" className="hover:text-yellow-400 transition">Regular</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>

          <a
            href="https://t.me/Jackwilliam019"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium bg-yellow-400 text-black hover:brightness-95 active:brightness-90 transition shadow-lg shadow-yellow-500/20"
          >
            Contact on Telegram
          </a>
        </div>
      </header>

      {/* 🔔 Yellow Note */}
      <div className="bg-yellow-400 text-black text-center text-sm font-medium py-2 px-4 shadow-md animate-fade-in">
        Before purchasing, feel free to check our reviews on 
        <a 
          href="https://www.blackhatworld.com/" 
          target="_blank" 
          rel="noreferrer" 
          className="underline font-semibold hover:text-neutral-800 ml-1"
        >
          BlackHatWorld
        </a>. 
        We're committed to providing quality and reliable service. 
        Thank you for choosing us!
      </div>

    </>
  )
}

export default Header