import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X,
  Home, TrendingUp, Headphones, ChefHat, Scissors, LayoutGrid,
} from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/trading', label: 'Trading' },
  { to: '/customer-service', label: 'Customer Service' },
  { to: '/music', label: 'Music' },
  { to: '/culinary', label: 'Culinary' },
  { to: '/hair', label: 'Hair' },
  { to: '/business', label: 'Business' },
  { to: '/games', label: 'Games' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const tabLinks = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/trading', icon: TrendingUp, label: 'Trading' },
  { to: '/music', icon: Headphones, label: 'Music' },
  { to: '/culinary', icon: ChefHat, label: 'Chef' },
  { to: '/hair', icon: Scissors, label: 'Beauty' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(212,132,154,0.08)]'
            : 'bg-transparent'
        }`}
      >
        {scrolled && !isDark && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
        )}

        <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-script text-3xl md:text-4xl text-gradient-rose tracking-wide leading-none">
              Pulchritude
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-body text-xs tracking-widest uppercase transition-all duration-300 pb-0.5 ${
                    isActive
                      ? 'text-rose border-b border-rose'
                      : 'text-muted hover:text-rose'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2 border border-rose/50 text-rose font-body text-xs tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose hover:text-white hover:border-rose"
            >
              Hire Me
            </Link>
            {/* Hamburger — tablet only (lg–xl), hidden on mobile where bottom bar handles navigation */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hidden lg:block xl:hidden text-off-white hover:text-rose transition-colors ml-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen slide-out menu (tablet + triggered by More tab) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-bg/98 backdrop-blur-2xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 h-14 md:h-20 border-b border-border/40">
              <span className="font-script text-2xl text-gradient-rose">Pulchritude</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-off-white hover:text-rose transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-rose/[0.07] blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center px-8 gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-display text-3xl font-light transition-all duration-300 ${
                        isActive ? 'text-rose' : 'text-off-white/60 hover:text-rose'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="px-8 pb-28 lg:pb-10 pt-6 border-t border-border relative z-10">
              <p className="font-script text-2xl text-gradient-rose">Okorie Angela Chiamaka</p>
              <p className="font-mono text-xs tracking-widest text-muted uppercase mt-2">Lagos, Nigeria</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BOTTOM TAB BAR — mobile only ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-2xl border-t border-border/60">
        <div className="flex items-center justify-around px-2 pt-1 pb-2">
          {tabLinks.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-2xl transition-all duration-200 min-w-[52px] ${
                  isActive ? 'text-rose' : 'text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`relative p-1.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-rose/15' : ''}`}>
                    <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                  </div>
                  <span className="font-mono text-[8.5px] tracking-wide uppercase leading-none">{label}</span>
                </>
              )}
            </NavLink>
          ))}

          {/* More — opens slide-out */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-2xl text-muted min-w-[52px] transition-colors"
          >
            <div className="p-1.5 rounded-xl">
              <LayoutGrid size={20} strokeWidth={1.5} />
            </div>
            <span className="font-mono text-[8.5px] tracking-wide uppercase leading-none">More</span>
          </button>
        </div>
      </div>
    </>
  )
}
