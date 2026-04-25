import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  TrendingUp, Headphones, ChefHat, Scissors, Briefcase, HeadphonesIcon,
  ArrowRight, MapPin, Mail, Phone
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
    title: 'Hair Stylist',
    description: 'Beauty professional skilled in natural hair, braids, weaves, locs, and precision styling.',
    accent: '#E8A8BE',
  },
  {
    to: '/business',
    icon: Briefcase,
    title: 'Business & Entrepreneurship',
    description: 'Brand builder and entrepreneur leveraging cross-industry expertise into cohesive business value.',
    accent: '#C9A84C',
  },
]

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Soft organic background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-rose/[0.07] blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.05] blur-[80px]" />
          <div className="absolute top-0 left-1/3 w-[200px] h-[200px] rounded-full bg-rose/[0.04] blur-[60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-12 w-full py-12 md:py-20 relative z-10">

          {/* ── MOBILE LAYOUT ── */}
          <div className="flex flex-col lg:hidden">

            {/* Mobile portrait — top, full-width card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto mb-8 w-full max-w-sm"
            >
              {/* Glow */}
              <div className="absolute -inset-4 rounded-[2rem] bg-rose/[0.12] blur-2xl pointer-events-none" />
              {/* Image card */}
              <div className="relative rounded-[2rem] overflow-hidden border border-rose/20 shadow-[0_20px_60px_rgba(212,132,154,0.25)]">
                <img
                  src={heroImg}
                  alt="Okorie Angela Chiamaka"
                  className="w-full h-[380px] object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
                {/* Floating name over image */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                  <span className="block font-script text-3xl text-rose/80 leading-none mb-1">Okorie</span>
                  <h1 className="font-display font-light leading-[0.95]">
                    <span className="block text-5xl text-gradient-rose">Angela</span>
                    <span className="block text-5xl text-off-white">Chiamaka</span>
                  </h1>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 right-4 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-xl z-10"
              >
                <p className="font-script text-base text-gradient-rose leading-none">Lagos, Nigeria</p>
                <p className="font-mono text-[9px] text-muted tracking-widest uppercase mt-0.5">Available Now</p>
              </motion.div>
            </motion.div>

            {/* Mobile text content */}
            <div className="mt-6">
              {/* Available label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-8 h-px bg-gradient-to-r from-rose to-transparent" />
                <div className="w-2 h-2 rounded-full bg-rose animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
                  Available for Opportunities
                </span>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-display text-xl font-light italic text-gold/80 mb-4 tracking-wide"
              >
                Trader. Creator. Entrepreneur.
              </motion.p>

              {/* Intro */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-body text-sm text-muted leading-relaxed mb-8"
              >
                A multi-talented Nigerian professional based in Lagos — navigating global financial markets,
                crafting soulful music, serving culinary artistry, and building businesses that last.
              </motion.p>

              {/* CTAs — full width on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col gap-3"
              >
                <Link
                  to="/about"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-rose text-bg font-body text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose-light"
                >
                  Discover More <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-3 px-8 py-4 border border-rose/40 text-rose font-body text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose hover:text-bg hover:border-rose"
                >
                  Work With Me
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ── DESKTOP LAYOUT (unchanged) ── */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            <div>
              {/* Label */}
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

              {/* Name */}
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
                Trader. Creator. Entrepreneur.
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

            {/* Desktop portrait */}
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

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </section>

      {/* FX TICKER */}
      <div className="relative py-4 bg-surface border-y border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...fxTicker, ...fxTicker].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-8">
              <span className="font-mono text-xs tracking-widest text-rose uppercase">
                {item.pair}
              </span>
              <span className="font-mono text-xs text-off-white/70">{item.price}</span>
              <span
                className={`font-mono text-xs ${
                  item.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {item.change}
              </span>
              <span className="text-border mx-2">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* PORTFOLIO SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
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

      {/* ABOUT SNAPSHOT */}
      <section className="bg-surface border-y border-border relative overflow-hidden">
        {/* Soft decorative blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-rose/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left */}
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

          {/* Right — photo + stats */}
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
            {[
              { value: '3+', label: 'Prop Firms Funded' },
              { value: '6+', label: 'Markets Traded' },
              { value: '5+', label: 'Years Experience' },
              { value: '2', label: 'Certifications' },
            ].map((s, i) => (
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

      {/* CONTACT STRIP */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="border border-border rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Background bloom */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,#D4849A09_0%,transparent_70%)] pointer-events-none rounded-3xl" />
          {/* Corner blobs */}
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
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-2 font-mono text-xs text-muted hover:text-rose transition-colors"
                  >
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
