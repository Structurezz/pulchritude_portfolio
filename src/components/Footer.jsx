import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Share2, AtSign, Globe } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/trading', label: 'Trading' },
  { to: '/customer-service', label: 'Customer Expert Representative' },
  { to: '/music', label: 'Music' },
  { to: '/culinary', label: 'Culinary' },
  { to: '/hair', label: 'Hair Stylist/ Make-Up Artist' },
  { to: '/business', label: 'Business' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-rose/[0.04] blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/[0.03] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        {/* Rose-gold rule */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-script text-5xl text-gradient-rose block mb-3 leading-tight">
              Pulchritude
            </span>
            <p className="font-display text-base text-gold/80 italic mb-4">
              Trader, Customer Expert Representative, Enterpreneur.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              A multi-talented Nigerian professional bringing excellence across trading, customer support, culinary arts, and business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-rose mb-6">
              Quick Links
            </h3>
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

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-rose mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+2348138204756"
                  className="flex items-center gap-3 text-muted hover:text-rose transition-colors group"
                >
                  <Phone size={14} className="text-rose/50 group-hover:text-rose" />
                  <span className="font-body text-sm">+234 813 820 4756</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348083135808"
                  className="flex items-center gap-3 text-muted hover:text-rose transition-colors group"
                >
                  <Phone size={14} className="text-rose/50 group-hover:text-rose" />
                  <span className="font-body text-sm">+234 808 313 5808</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:angieokorie@gmail.com"
                  className="flex items-center gap-3 text-muted hover:text-rose transition-colors group"
                >
                  <Mail size={14} className="text-rose/50 group-hover:text-rose" />
                  <span className="font-body text-sm">angieokorie@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <MapPin size={14} className="text-rose/50 flex-shrink-0" />
                <span className="font-body text-sm">Lagos, Nigeria 100001</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-rose mb-6">
              Follow
            </h3>
            <div className="flex gap-3 mb-8">
              {[
                { icon: AtSign, label: 'Instagram', href: '#' },
                { icon: Share2, label: 'Twitter', href: '#' },
                { icon: Globe, label: 'LinkedIn', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:text-rose hover:border-rose/50 hover:shadow-[0_0_16px_rgba(212,132,154,0.2)] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-rose text-bg font-body text-xs tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose-light hover:shadow-[0_0_20px_rgba(212,132,154,0.35)]"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="w-full h-px bg-border mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted tracking-wider">
            &copy; 2025 Okorie Angela Chiamaka. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted/50 tracking-wider">
            Crafted with love in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
