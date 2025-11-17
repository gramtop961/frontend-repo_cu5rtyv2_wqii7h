import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
    }`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-white font-semibold tracking-wide">Brand Waves</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/wavelab" className={navLinkClass}>WaveLab</NavLink>
            <NavLink to="/digital-signage" className={navLinkClass}>Digital Signage</NavLink>
            <NavLink to="/branding" className={navLinkClass}>Branding</NavLink>
            <NavLink to="/contact" className="ml-2 px-4 py-2 rounded-full text-sm font-semibold text-slate-900 bg-cyan-300 hover:bg-cyan-200 transition-colors">Contact</NavLink>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
            <div className="h-px bg-white/10" />
            <NavLink onClick={() => setOpen(false)} to="/wavelab" className={navLinkClass}>WaveLab</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/digital-signage" className={navLinkClass}>Digital Signage</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/branding" className={navLinkClass}>Branding</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className="block px-4 py-2 rounded-full text-sm font-semibold text-slate-900 bg-cyan-300 w-max">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
