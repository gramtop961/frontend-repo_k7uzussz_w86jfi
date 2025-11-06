import { useState } from 'react'

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm md:text-base text-gray-100/90 hover:text-white transition-colors px-3 py-2 rounded-md"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-orange-500 to-rose-500 shadow-md ring-1 ring-white/20 flex items-center justify-center text-white font-black">
              CEH
            </div>
            <span className="text-white font-semibold tracking-wide">Campus Event Hub</span>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-3 space-y-1">
            <a href="#home" onClick={() => setOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Home</a>
            <a href="#events" onClick={() => setOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Events</a>
            <a href="#about" onClick={() => setOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Contact</a>
          </div>
        )}
      </div>
    </header>
  )
}
