import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react'

const Instagram = ({ size = 15 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const Linkedin = ({ size = 15 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/customer-service', label: 'Customer Service' },
  { to: '/lead-generation', label: 'Lead Generation' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  'Live Chat Support',
  'B2B Lead Qualification',
  'Cold Calling & Outreach',
  'CRM Management',
  'Appointment Setting',
  'Client Retention',
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border relative overflow-hidden lg:mb-0 mb-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-rose/[0.08] blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/[0.05] blur-3xl pointer-events-none rounded-full" />

      <div className="w-full px-6 md:px-12 py-16 relative z-10">
        {/* CTA banner */}
        <div className="rounded-3xl bg-gradient-to-br from-rose/15 via-transparent to-gold/10 border border-border p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-rose/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-rose mb-3">Ready to Collaborate</p>
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-off-white leading-tight">
                Let's grow your <span className="text-gradient-modern">customer base</span>.
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-rose to-rose-dark text-white font-body text-sm font-semibold tracking-wide rounded-full hover:shadow-lg hover:shadow-rose/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Discovery Call <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose to-gold flex items-center justify-center">
                <span className="font-display text-white font-bold text-base">AO</span>
              </div>
              <div>
                <div className="font-display text-base font-semibold text-off-white leading-none">Angela Okorie</div>
                <div className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase mt-1">CS · Lead Gen</div>
              </div>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed mb-5 max-w-xs">
              Customer Service & Lead Generation Specialist in Lagos — 6+ years building loyal clients and qualified pipeline.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/2348138204756' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-rose hover:border-rose/60 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.25em] uppercase text-rose mb-5">Navigate</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-muted hover:text-rose transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.25em] uppercase text-rose mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="font-body text-sm text-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.25em] uppercase text-rose mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+2348138204756" className="flex items-center gap-3 text-muted hover:text-rose transition-colors group">
                  <Phone size={13} className="text-rose/60 group-hover:text-rose" />
                  <span className="font-body text-sm">+234 813 820 4756</span>
                </a>
              </li>
              <li>
                <a href="mailto:angieokorie@gmail.com" className="flex items-center gap-3 text-muted hover:text-rose transition-colors group">
                  <Mail size={13} className="text-rose/60 group-hover:text-rose" />
                  <span className="font-body text-sm">angieokorie@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <MapPin size={13} className="text-rose/60 flex-shrink-0" />
                <span className="font-body text-sm">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-border mt-14 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-muted tracking-wider">
            &copy; 2026 Okorie Angela Chiamaka. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted/60 tracking-wider">
            Built in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
