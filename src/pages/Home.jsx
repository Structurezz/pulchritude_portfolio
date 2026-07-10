import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Headphones, Target, ArrowRight, ArrowUpRight, MapPin, Mail, Phone,
  Sparkles, TrendingUp, Users, Star, MessageSquare, CheckCircle2,
} from 'lucide-react'
import PortfolioCard from '../components/PortfolioCard'
import SectionLabel from '../components/SectionLabel'
import heroImg from '../assets/image2.jpeg'
import aboutCircleImg from '../assets/image6.jpeg'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const portfolioCards = [
  {
    to: '/customer-service',
    icon: Headphones,
    title: 'Customer Service',
    description: '6+ years across fintech, e-commerce, and global BPO. High CSAT, low escalation, and always people-first.',
    accent: '#818CF8',
    badge: 'Core Expertise',
  },
  {
    to: '/lead-generation',
    icon: Target,
    title: 'Lead Generation',
    description: 'B2B & B2C lead qualification, cold outreach, appointment setting, and CRM pipeline management at The Call Guru and beyond.',
    accent: '#34D399',
    badge: 'Growth Engine',
  },
]

const stats = [
  { value: '6+', label: 'Years Experience', icon: TrendingUp },
  { value: '7+', label: 'Companies Served', icon: Users },
  { value: '98%', label: 'CSAT Average', icon: Star },
  { value: '10K+', label: 'Leads Qualified', icon: Target },
]

const capabilities = [
  { icon: MessageSquare, title: 'Multi-channel support', desc: 'Live chat, email, phone & ticketing systems.' },
  { icon: Target, title: 'Qualified pipeline', desc: 'Cold outreach that converts to booked meetings.' },
  { icon: CheckCircle2, title: 'CRM mastery', desc: 'HubSpot, Salesforce, Zendesk, Freshdesk & Intercom.' },
  { icon: Sparkles, title: 'Client-first mindset', desc: 'Empathy and precision on every touchpoint.' },
]

export default function Home() {
  return (
    <motion.div {...pageTransition}>

      {/* ══════════════════════════════════════════
          HERO — modern, gradient-forward
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-rose/15 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-12 w-full py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* LEFT — text */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-rose/30 bg-rose/[0.08] backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-rose">
                  Available for Opportunities · Lagos, NG
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-semibold leading-[0.98] tracking-tight mb-6"
              >
                <span className="block text-4xl md:text-6xl lg:text-7xl text-off-white">Hi, I'm Angela.</span>
                <span className="block text-4xl md:text-6xl lg:text-7xl text-gradient-modern mt-2">
                  I turn conversations
                </span>
                <span className="block text-4xl md:text-6xl lg:text-7xl text-off-white/90 mt-2">
                  into <span className="italic font-script text-gold text-5xl md:text-7xl lg:text-8xl">customers</span>.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-body text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-10"
              >
                A Lagos-based specialist blending <span className="text-off-white font-medium">Customer Service excellence</span> with
                data-driven <span className="text-off-white font-medium">Lead Generation</span> — building loyal clients and
                predictable pipeline across fintech, BPO, and B2B sectors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-rose to-rose-dark text-white font-body text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-rose/40 hover:-translate-y-0.5"
                >
                  Let's Work Together <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-card border border-border text-off-white font-body text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:border-rose/60 hover:-translate-y-0.5"
                >
                  About Me
                </Link>
              </motion.div>

              {/* Trust bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted"
              >
                <span className="font-mono tracking-widest uppercase text-[10px]">Trusted at</span>
                {['Teleperformance', 'The Call Guru', 'Zili Capital', 'OCTAFX'].map((c) => (
                  <span key={c} className="font-display text-sm text-off-white/60 hover:text-rose transition-colors">
                    {c}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — image with floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative">
                {/* Halo */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-rose/25 to-gold/20 blur-3xl" />

                <div className="relative">
                  <img
                    src={heroImg}
                    alt="Angela Okorie"
                    className="w-72 h-96 md:w-[380px] md:h-[500px] object-cover object-top rounded-[2.5rem] shadow-2xl shadow-rose/20 border border-white/10"
                  />

                  {/* Floating CSAT card — top left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -top-4 -left-4 md:-left-10 bg-card/95 backdrop-blur-xl border border-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-rose/15 flex items-center justify-center">
                      <Star size={18} className="text-rose" fill="currentColor" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold text-off-white leading-none">98%</p>
                      <p className="font-mono text-[9px] tracking-widest uppercase text-muted mt-0.5">CSAT</p>
                    </div>
                  </motion.div>

                  {/* Floating pipeline card — bottom right */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-4 -right-4 md:-right-10 bg-card/95 backdrop-blur-xl border border-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                      <Target size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold text-off-white leading-none">10K+</p>
                      <p className="font-mono text-[9px] tracking-widest uppercase text-muted mt-0.5">Leads</p>
                    </div>
                  </motion.div>

                  {/* Location tag */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute top-1/2 -translate-y-1/2 -right-8 md:-right-16 bg-bg/90 backdrop-blur-xl border border-rose/40 rounded-full px-4 py-2 shadow-lg rotate-90 origin-center"
                  >
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rose">Lagos · NG</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS — modern gradient cards
      ══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-24 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-card border border-border rounded-3xl p-5 md:p-7 hover:border-rose/40 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.3)] transition-all duration-300"
            >
              <div className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-rose/10 flex items-center justify-center group-hover:bg-rose/20 transition-colors">
                <s.icon size={14} className="text-rose" />
              </div>
              <div className="font-display text-3xl md:text-5xl font-bold text-gradient-modern mb-1 md:mb-2 leading-none">{s.value}</div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERTISE — 2 focus cards
      ══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="max-w-2xl mb-12 md:mb-16">
          <SectionLabel>What I Do</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-4 tracking-tight leading-tight"
          >
            Two disciplines. <br />
            <span className="text-gradient-modern">One relentless focus.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-muted"
          >
            I've spent the last six years mastering the two functions that quietly power every great business: keeping customers happy, and bringing new ones to the door.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {portfolioCards.map((card, i) => (
            <PortfolioCard key={card.to} {...card} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CAPABILITIES — feature grid
      ══════════════════════════════════════════ */}
      <section className="bg-surface border-y border-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-4 tracking-tight">
              How I deliver <span className="text-gradient-modern">results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-rose/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center mb-4">
                  <c.icon size={20} className="text-rose" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg font-semibold text-off-white mb-2">{c.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT PREVIEW
      ══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-rose/20 to-gold/15 blur-3xl" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-border shadow-2xl">
                <img src={aboutCircleImg} alt="Angela" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
              </div>

              {/* Sig card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="font-script text-2xl text-gradient-modern leading-none">Angela</p>
                <p className="font-mono text-[9px] tracking-widest uppercase text-muted mt-1">Client-First</p>
              </motion.div>
            </div>
          </motion.div>

          <div>
            <SectionLabel>About Me</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-6 tracking-tight leading-tight"
            >
              People-first work, <br />
              <span className="text-gradient-modern">precision-driven results.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-muted leading-relaxed mb-5"
            >
              I'm Okorie Angela Chiamaka — a Lagos-based Customer Service and Lead Generation Specialist with 6+ years across fintech, e-commerce, BPO and B2B sales operations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-muted leading-relaxed mb-8"
            >
              Whether I'm de-escalating a live chat, qualifying a cold lead at The Call Guru, or setting appointments for global sales teams — I bring the same energy: empathy, clarity, and follow-through.
            </motion.p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-rose border-b border-rose/40 pb-1 hover:border-rose transition-colors"
            >
              Read My Full Story <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT CTA
      ══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 overflow-hidden border border-border bg-gradient-to-br from-rose/15 via-card to-gold/10"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-rose/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-rose/30 bg-rose/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Available Now</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-off-white leading-tight tracking-tight mb-3">
                Let's build your <span className="text-gradient-modern">customer engine</span>.
              </h2>
              <p className="font-body text-muted mb-6">
                Book a discovery call and we'll map out how I can help your team ship better support and close more leads.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <a href="mailto:angieokorie@gmail.com" className="flex items-center gap-2 text-off-white/80 hover:text-rose transition-colors">
                  <Mail size={14} className="text-rose" /> angieokorie@gmail.com
                </a>
                <a href="tel:+2348138204756" className="flex items-center gap-2 text-off-white/80 hover:text-rose transition-colors">
                  <Phone size={14} className="text-rose" /> +234 813 820 4756
                </a>
                <span className="flex items-center gap-2 text-off-white/80">
                  <MapPin size={14} className="text-rose" /> Lagos, Nigeria
                </span>
              </div>
            </div>

            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose to-rose-dark text-white font-body text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-rose/40 hover:-translate-y-0.5"
            >
              Send a Message <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}
