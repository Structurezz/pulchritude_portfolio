import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  TrendingUp, Headphones, ChefHat, Scissors, Briefcase, HeadphonesIcon,
  ArrowRight, ArrowUpRight, MapPin, Mail, Phone, ChevronDown,
} from 'lucide-react'
import PortfolioCard from '../components/PortfolioCard'
import SectionLabel from '../components/SectionLabel'
import heroImg from '../assets/image2.jpeg'
import portraitImg from '../assets/WhatsApp Image 2026-04-25 at 14.16.35.jpeg'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const fxTicker = [
  { pair: 'EUR/USD', price: '1.0842', change: '+0.12%' },
  { pair: 'GBP/USD', price: '1.2674', change: '-0.08%' },
  { pair: 'XAU/USD', price: '2,341.50', change: '+0.54%' },
  { pair: 'USD/JPY', price: '157.23', change: '+0.31%' },
  { pair: 'USD/CHF', price: '0.9012', change: '-0.19%' },
  { pair: 'AUD/USD', price: '0.6543', change: '+0.22%' },
  { pair: 'NZD/USD', price: '0.5987', change: '-0.14%' },
  { pair: 'USD/CAD', price: '1.3712', change: '+0.07%' },
  { pair: 'XAG/USD', price: '29.74', change: '+0.38%' },
  { pair: 'EUR/GBP', price: '0.8554', change: '+0.05%' },
]

const portfolioCards = [
  {
    to: '/trading',
    icon: TrendingUp,
    title: 'Forex & Commodities',
    description: 'Prop trader and technical analyst with experience across 6+ markets including FX and Gold.',
    accent: '#7EB8F7',
  },
  {
    to: '/customer-service',
    icon: HeadphonesIcon,
    title: 'Customer Service',
    description: 'People-first CRM expert with a track record of high CSAT and seamless client experiences.',
    accent: '#5ECBBD',
  },
  {
    to: '/music',
    icon: Headphones,
    title: 'Music',
    description: 'Singer, songwriter, and performing artist blending Afrobeats, R&B, and Gospel.',
    accent: '#D4849A',
  },
  {
    to: '/culinary',
    icon: ChefHat,
    title: 'Chef & Culinary Arts',
    description: 'Culinary artist specialising in Nigerian and continental cuisine for private and catered events.',
    accent: '#F4A76A',
  },
  {
    to: '/hair',
    icon: Scissors,
    title: 'Hair & Makeup',
    description: 'Beauty professional skilled in natural hair, braids, weaves, locs, and makeup artistry.',
    accent: '#E8A8BE',
  },
  {
    to: '/business',
    icon: Briefcase,
    title: 'Business',
    description: 'Brand builder and entrepreneur leveraging cross-industry expertise into cohesive business value.',
    accent: '#C9A84C',
  },
]

const stats = [
  { value: '3+', label: 'Prop Firms Funded' },
  { value: '6+', label: 'Markets Traded' },
  { value: '5+', label: 'Years Experience' },
  { value: '6+', label: 'Industries' },
]

export default function Home() {
  return (
    <motion.div {...pageTransition}>

      {/* ══════════════════════════════════════════
          MOBILE HERO — full viewport, image fills screen
      ══════════════════════════════════════════ */}
      <section className="lg:hidden relative h-[100svh] overflow-hidden">
        {/* Full-bleed portrait */}
        <img
          src={heroImg}
          alt="Okorie Angela Chiamaka"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Layered gradient: dark at bottom for text legibility, subtle at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-transparent" />

        {/* TOP STATUS BAR */}
        <div className="absolute top-14 left-0 right-0 px-5 flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-rose animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-rose/90">
            Available for Opportunities
          </span>
          <div className="ml-auto font-mono text-[10px] tracking-widest uppercase text-muted">
            Lagos, NG
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8">
          {/* Script name */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block font-script text-4xl text-rose/70 leading-none mb-1"
          >
            Okorie
          </motion.span>

          {/* Display name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-light leading-[0.92] mb-3"
          >
            <span className="block text-[3.8rem] text-gradient-rose">Angela</span>
            <span className="block text-[3.8rem] text-off-white">Chiamaka</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-display text-base font-light italic text-gold/80 mb-6 tracking-wide"
          >
            Trader, Customer Expert Representative, Entrepreneur.
          </motion.p>

          {/* CTA buttons — full width, side by side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex gap-3"
          >
            <Link
              to="/about"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-rose text-bg font-mono text-[10px] tracking-widest uppercase rounded-full transition-all duration-300 active:scale-95"
            >
              About Me <ArrowRight size={12} />
            </Link>
            <Link
              to="/contact"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-off-white/10 backdrop-blur-sm border border-off-white/20 text-off-white font-mono text-[10px] tracking-widest uppercase rounded-full transition-all duration-300 active:scale-95"
            >
              Work With Me
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="absolute bottom-36 right-5"
        >
          <ChevronDown size={16} className="text-off-white/30" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          DESKTOP HERO — two-column layout
      ══════════════════════════════════════════ */}
      <section className="hidden lg:block relative min-h-screen overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-rose/[0.07] blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.05] blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-12 w-full py-20 relative z-10">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-14 h-px bg-gradient-to-r from-rose to-transparent" />
                <span className="font-mono text-xs tracking-widest uppercase text-rose">Lagos, Nigeria</span>
                <div className="w-2 h-2 rounded-full bg-rose animate-pulse" />
                <span className="font-mono text-xs tracking-widest uppercase text-muted">Available for Opportunities</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-6"
              >
                <span className="block font-script text-6xl text-rose/60 leading-none mb-2">Okorie</span>
                <h1 className="font-display font-light leading-[1.0]">
                  <span className="block text-[7rem] text-gradient-rose">Angela</span>
                  <span className="block text-[7rem] text-off-white">Chiamaka</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display text-3xl font-light italic text-gold/80 mb-8 tracking-wide"
              >
                Trader. Customer Expert Representative, Entrepreneur.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
                className="font-body text-lg text-muted leading-relaxed max-w-2xl mb-12"
              >
                A multi-talented Nigerian professional based in Lagos — navigating global financial markets,
                crafting soulful music, serving culinary artistry, delivering exceptional client experiences,
                and building businesses that last.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.54 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-rose text-bg font-body text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose-light hover:shadow-[0_0_30px_rgba(212,132,154,0.4)]"
                >
                  Discover More <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-3.5 border border-rose/40 text-rose font-body text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose hover:text-bg hover:border-rose"
                >
                  Work With Me
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex justify-center items-end relative"
            >
              <div className="absolute inset-0 bg-rose/[0.08] rounded-full blur-3xl scale-75" />
              <div className="relative z-10">
                <img
                  src={heroImg}
                  alt="Okorie Angela Chiamaka"
                  className="w-[420px] h-[540px] object-cover object-top rounded-3xl shadow-[0_30px_80px_rgba(212,132,154,0.2)]"
                />
                <div className="absolute -inset-2 rounded-3xl border border-rose/20 pointer-events-none" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-5 -left-8 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl"
                >
                  <p className="font-script text-xl text-gradient-rose leading-none">Lagos, Nigeria</p>
                  <p className="font-mono text-[10px] text-muted tracking-widest uppercase mt-0.5">Available Now</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </section>

      {/* FX TICKER */}
      <div className="relative py-3 bg-surface border-y border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...fxTicker, ...fxTicker].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 md:mx-8">
              <span className="font-mono text-[10px] md:text-xs tracking-widest text-rose uppercase">{item.pair}</span>
              <span className="font-mono text-[10px] md:text-xs text-off-white/70">{item.price}</span>
              <span className={`font-mono text-[10px] md:text-xs ${item.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {item.change}
              </span>
              <span className="text-border mx-1">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE STATS STRIP
      ══════════════════════════════════════════ */}
      <div className="lg:hidden px-5 pt-8 pb-2">
        <div className="grid grid-cols-4 gap-2">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-card border border-border rounded-2xl p-3 text-center"
            >
              <div className="font-display text-2xl font-light text-gradient-rose leading-none mb-1">{s.value}</div>
              <div className="font-mono text-[7.5px] tracking-wide uppercase text-muted leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE PORTFOLIO — horizontal snap-scroll carousel
      ══════════════════════════════════════════ */}
      <section className="lg:hidden pt-10 pb-6">
        <div className="px-5 mb-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-gradient-to-r from-rose to-transparent" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-rose">My World</span>
          </div>
          <h2 className="font-display text-3xl font-light text-off-white">A Universe of Talent</h2>
        </div>

        {/* Snap-scroll row — peek of next card on right edge */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-5 no-scrollbar">
          {portfolioCards.map((card, i) => (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="snap-start flex-shrink-0 w-[72vw] max-w-[280px]"
            >
              <Link
                to={card.to}
                className="block h-full bg-card border border-border rounded-3xl p-6 active:scale-[0.97] transition-transform duration-150 relative overflow-hidden"
              >
                {/* Accent glow */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl pointer-events-none"
                  style={{ background: card.accent }}
                />
                {/* Icon */}
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-2xl mb-4 border border-border"
                  style={{ color: card.accent, background: card.accent + '18' }}
                >
                  <card.icon size={20} />
                </div>
                {/* Title */}
                <h3 className="font-display text-lg font-medium text-off-white mb-2 leading-tight">
                  {card.title}
                </h3>
                {/* Description */}
                <p className="font-body text-xs text-muted leading-relaxed mb-4">
                  {card.description}
                </p>
                {/* Arrow */}
                <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase" style={{ color: card.accent }}>
                  <span>Explore</span>
                  <ArrowUpRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-2">
          {portfolioCards.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${i === 0 ? 'w-4 h-1.5 bg-rose' : 'w-1.5 h-1.5 bg-border'}`}
            />
          ))}
        </div>
      </section>

      {/* DESKTOP PORTFOLIO GRID */}
      <section className="hidden lg:block max-w-7xl mx-auto px-12 py-24 md:py-32">
        <SectionLabel>Expertise & Portfolio</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-4"
        >
          A Universe of Talent
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted max-w-xl mb-16"
        >
          Each domain is a full-time commitment — explore Angela's world across six distinct spheres of excellence.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioCards.map((card, i) => (
            <PortfolioCard key={card.to} {...card} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT SNAPSHOT — mobile app style
      ══════════════════════════════════════════ */}
      <section className="bg-surface border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-rose/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />

        {/* MOBILE about */}
        <div className="lg:hidden relative z-10">
          {/* Full-width photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={portraitImg}
              alt="Angela Chiamaka"
              className="w-full h-64 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent" />
          </motion.div>

          {/* Text content */}
          <div className="px-5 py-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-gradient-to-r from-rose to-transparent" />
              <span className="font-mono text-[9px] tracking-widest uppercase text-rose">About Angela</span>
            </div>
            <h2 className="font-display text-3xl font-light text-off-white mb-4 leading-tight">
              One Woman.{' '}
              <span className="text-gradient-rose italic">Infinite Dimensions.</span>
            </h2>
            <p className="font-body text-sm text-muted leading-relaxed mb-6">
              Okorie Angela Chiamaka is a B.Sc. graduate of Soil Science from Abia State University who
              transformed her analytical mindset into a multi-industry career spanning global finance,
              music, culinary arts, beauty, customer experience, and entrepreneurship.
            </p>

            {/* Stats 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {stats.map((s, i) => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
                  <div className="font-display text-3xl font-light text-gradient-rose mb-1">{s.value}</div>
                  <div className="font-mono text-[9px] tracking-widest uppercase text-muted">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-rose border-b border-rose/30 pb-1"
            >
              Read Full Story <ArrowRight size={10} />
            </Link>
          </div>
        </div>

        {/* DESKTOP about */}
        <div className="hidden lg:grid max-w-7xl mx-auto px-12 py-24 grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <SectionLabel>About Angela</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-light text-off-white mb-6 leading-tight"
            >
              One Woman.{' '}
              <span className="text-gradient-rose italic">Infinite Dimensions.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-muted leading-relaxed mb-6"
            >
              Okorie Angela Chiamaka is a B.Sc. graduate of Soil Science from Abia State University who
              transformed her analytical mindset into a multi-industry career spanning global finance,
              music, culinary arts, beauty, customer experience, and entrepreneurship.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="font-body text-muted leading-relaxed mb-10"
            >
              Based in Lagos, Nigeria, she brings the same discipline and precision she applies to
              financial markets to every craft she pursues — making her one of the most versatile and
              driven professionals on the continent.
            </motion.p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-rose border-b border-rose/30 pb-1 hover:border-rose transition-colors"
            >
              Read Full Story <ArrowRight size={12} />
            </Link>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-2"
            >
              <img
                src={portraitImg}
                alt="Angela Chiamaka"
                className="w-full h-56 object-cover object-top rounded-2xl shadow-[0_20px_50px_rgba(212,132,154,0.15)]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-card/60 to-transparent pointer-events-none" />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-rose/30 hover:shadow-[0_0_30px_rgba(212,132,154,0.08)] transition-all duration-300 group"
                >
                  <div className="font-display text-4xl font-light text-gradient-rose mb-2">{s.value}</div>
                  <div className="font-mono text-xs tracking-widest uppercase text-muted group-hover:text-rose/70 transition-colors">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT — mobile app card style
      ══════════════════════════════════════════ */}

      {/* MOBILE contact */}
      <section className="lg:hidden px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-3xl p-6 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-rose/[0.08] blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-rose animate-pulse" />
              <span className="font-mono text-[9px] tracking-widest uppercase text-rose">Get In Touch</span>
            </div>
            <h2 className="font-display text-2xl font-light text-off-white mb-4 leading-tight">
              Ready to Collaborate?
            </h2>
            <div className="flex flex-col gap-2.5 mb-6">
              {[
                { icon: Phone, text: '+234 813 820 4756', href: 'tel:+2348138204756' },
                { icon: Mail, text: 'angieokorie@gmail.com', href: 'mailto:angieokorie@gmail.com' },
                { icon: MapPin, text: 'Lagos, Nigeria', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 py-2.5 px-4 bg-surface rounded-xl border border-border font-mono text-xs text-muted active:scale-[0.98] transition-transform"
                >
                  <Icon size={14} className="text-rose/60 flex-shrink-0" />
                  <span className="truncate">{text}</span>
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full py-4 bg-rose text-bg font-mono text-[10px] tracking-widest uppercase rounded-full active:scale-[0.97] transition-transform"
            >
              Send a Message <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* DESKTOP contact */}
      <section className="hidden lg:block max-w-7xl mx-auto px-12 py-24">
        <div className="border border-border rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,#D4849A09_0%,transparent_70%)] pointer-events-none rounded-3xl" />
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-rose/[0.06] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <SectionLabel>Get In Touch</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-light text-off-white mb-3">
                Ready to Collaborate?
              </h2>
              <div className="flex flex-wrap gap-6 mt-4">
                {[
                  { icon: Phone, text: '+234 813 820 4756', href: 'tel:+2348138204756' },
                  { icon: Mail, text: 'angieokorie@gmail.com', href: 'mailto:angieokorie@gmail.com' },
                  { icon: MapPin, text: 'Lagos, Nigeria', href: '#' },
                ].map(({ icon: Icon, text, href }) => (
                  <a key={text} href={href} className="flex items-center gap-2 font-mono text-xs text-muted hover:text-rose transition-colors">
                    <Icon size={13} className="text-rose/60" />
                    {text}
                  </a>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-3 px-10 py-4 bg-rose text-bg font-body text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose-light hover:shadow-[0_0_30px_rgba(212,132,154,0.4)]"
            >
              Send a Message <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </motion.div>
  )
}
