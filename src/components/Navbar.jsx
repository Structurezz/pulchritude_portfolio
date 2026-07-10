import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X,
  Home, Headphones, Target, User, Mail, LayoutGrid,
} from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/customer-service', label: 'Customer Service' },
  { to: '/lead-generation', label: 'Lead Generation' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const tabLinks = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/customer-service', icon: Headphones, label: 'Support' },
  { to: '/lead-generation', icon: Target, label: 'Leads' },
  { to: '/about', icon: User, label: 'About' },
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
            ? 'bg-bg/80 backdrop-blur-2xl border-b border-border/60 shadow-[0_4px_30px_-10px_rgba(99,102,241,0.15)]'
            : 'bg-transparent'
        }`}
      >
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
        )}

        <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose to-gold flex items-center justify-center shadow-lg shadow-rose/20">
                <span className="font-display text-white font-bold text-sm">AO</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-rose to-gold blur-md opacity-40 -z-10" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-sm font-semibold text-off-white leading-none">Angela Okorie</div>
              <div className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase mt-1">CS · Lead Gen</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1 bg-card/40 backdrop-blur-md border border-border/50 rounded-full px-2 py-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative font-body text-[12px] font-medium tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-rose to-rose-dark shadow-md shadow-rose/30'
                      : 'text-muted hover:text-off-white'
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
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose to-rose-dark text-white font-body text-xs font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-rose/40 hover:-translate-y-0.5"
            >
              Hire Me
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-off-white hover:text-rose transition-colors p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen slide-out menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-bg/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 md:h-20 border-b border-border/40">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose to-gold flex items-center justify-center">
                  <span className="font-display text-white font-bold text-sm">AO</span>
                </div>
                <span className="font-display text-sm font-semibold text-off-white">Angela Okorie</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-off-white hover:text-rose transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-rose/[0.12] blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full bg-gold/[0.08] blur-3xl pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center px-8 gap-4 relative z-10">
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
                      `block font-display text-4xl font-light transition-all duration-300 ${
                        isActive ? 'text-gradient-modern font-medium' : 'text-off-white/70 hover:text-rose'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="px-8 pb-28 lg:pb-10 pt-6 border-t border-border relative z-10">
              <p className="font-display text-lg text-off-white font-medium">Okorie Angela Chiamaka</p>
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase mt-1">Lagos, Nigeria · Available</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom tab bar — mobile */}
      <div className="lg:hidden fixed bottom-3 left-3 right-3 z-50 rounded-2xl bg-card/90 backdrop-blur-2xl border border-border/60 shadow-lg shadow-black/20">
        <div className="flex items-center justify-around px-2 py-2">
          {tabLinks.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl transition-all duration-200 min-w-[56px] ${
                  isActive ? 'text-rose' : 'text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`relative p-1.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-rose/15' : ''}`}>
                    <Icon size={19} strokeWidth={isActive ? 2.2 : 1.6} />
                  </div>
                  <span className="font-mono text-[8.5px] tracking-wider uppercase leading-none">{label}</span>
                </>
              )}
            </NavLink>
          ))}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl text-muted min-w-[56px] transition-colors"
          >
            <div className="p-1.5 rounded-lg">
              <LayoutGrid size={19} strokeWidth={1.6} />
            </div>
            <span className="font-mono text-[8.5px] tracking-wider uppercase leading-none">More</span>
          </button>
        </div>
      </div>
    </>
  )
}
