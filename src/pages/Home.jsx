import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const timer = setTimeout(() => setShowIntro(false), 3800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div {...pageTransition}>

      {/* ══════════════════════════════════════════
          ✱ MOBILE ENTRANCE POP
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setShowIntro(false)}
            className="lg:hidden fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center px-6 overflow-hidden"
          >
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-rose/30 blur-[120px]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gold/25 blur-[120px]"
              />
              <div className="absolute inset-0 grid-pattern opacity-30" />
            </div>

            {/* Skip button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              onClick={(e) => { e.stopPropagation(); setShowIntro(false) }}
              className="absolute top-6 right-5 font-mono text-[10px] tracking-[0.25em] uppercase text-muted border border-border rounded-full px-3 py-1.5 bg-card/60 backdrop-blur-md active:scale-95 transition-transform z-10"
            >
              Skip
            </motion.button>

            {/* AO monogram badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mb-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose to-gold flex items-center justify-center shadow-2xl shadow-rose/50">
                <span className="font-display text-white font-bold text-xl">AO</span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose to-gold blur-xl opacity-60 -z-10" />
            </motion.div>

            {/* Text block */}
            <div className="relative z-10 text-center max-w-sm">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="font-mono text-[11px] tracking-[0.3em] uppercase text-rose mb-4"
              >
                Hello there
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl font-bold text-off-white leading-[1.02] tracking-tight mb-4"
              >
                I am{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.85, duration: 0.7, type: 'spring', stiffness: 180, damping: 14 }}
                  className="inline-block text-gradient-modern"
                >
                  Angela
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.15, duration: 0.4 }}
                  className="text-gold"
                >
                  .
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="font-display text-2xl font-medium text-off-white/90 leading-tight"
              >
                I turn conversations{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.75, duration: 0.6, type: 'spring', stiffness: 200, damping: 16 }}
                  className="inline-block italic font-script text-gold text-4xl"
                >
                  into customers
                </motion.span>
                .
              </motion.p>
            </div>

            {/* Bottom hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Tap anywhere to enter
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          ✱ MOBILE APP VIEW (lg:hidden)
      ══════════════════════════════════════════ */}
      <div className="lg:hidden">
        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/15 blur-3xl" />
          <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
        </div>

        <div className="relative z-10 pt-20 pb-32">
          {/* ─── Greeting ─── */}
          <div className="px-4 pt-4 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-emerald-400">Open to Opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h1 className="font-display text-3xl font-bold text-off-white leading-[1.05] tracking-tight">
                Hey, I'm <span className="text-gradient-modern">Angela</span> 👋
              </h1>
              <p className="font-body text-sm text-muted mt-2 leading-relaxed">
                Customer Service Specialist &amp; Lead Gen Expert building loyal clients from Lagos.
              </p>
            </motion.div>
          </div>

          {/* ─── Hero photo card ─── */}
          <div className="px-4 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              {/* Photo — clean, no card frame */}
              <div className="relative">
                <img
                  src={heroImg}
                  alt="Angela Okorie"
                  className="w-full h-[420px] object-cover object-top rounded-[2rem]"
                  style={{ mixBlendMode: 'normal' }}
                />

                {/* Location tag top-left — white bg, black text */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md">
                  <MapPin size={11} className="text-black" />
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-black">Zapopan, Mexico</span>
                </div>

                {/* Featured stats top-right — white bg, black text */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md">
                  <Star size={11} className="text-gold" fill="currentColor" />
                  <span className="font-mono text-[10px] font-bold tracking-wide uppercase text-black">Top Performer</span>
                </div>
              </div>

              {/* Info block — white bg with black text, below the picture */}
              <div className="mt-3 bg-white rounded-2xl px-4 py-3 shadow-md flex items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-black/60 mb-1">Currently at</p>
                  <p className="font-display text-lg font-bold text-black leading-tight">The Call Guru</p>
                  <p className="font-body text-xs text-black/70 mt-0.5">Lead Generation Specialist</p>
                </div>
                <Link
                  to="/lead-generation#role-call-guru-current"
                  className="flex-shrink-0 w-11 h-11 rounded-2xl bg-black flex items-center justify-center active:scale-95 transition-transform"
                >
                  <ArrowUpRight size={18} className="text-white" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ─── Quick actions ─── */}
          <div className="px-4 mb-8">
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { icon: Mail, label: 'Email', href: 'mailto:angieokorie@gmail.com', accent: 'from-rose to-rose-dark' },
                { icon: Phone, label: 'Call', href: 'tel:+2348138204756', accent: 'from-gold to-gold-light' },
                { icon: MessageSquare, label: 'Message', href: '/contact', accent: 'from-emerald-500 to-emerald-600' },
              ].map(({ icon: Icon, label, href, accent }, i) => {
                const Cmp = href.startsWith('/') ? Link : 'a'
                const props = href.startsWith('/') ? { to: href } : { href }
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  >
                    <Cmp
                      {...props}
                      className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-2xl active:scale-95 transition-transform"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-md`}>
                        <Icon size={16} className="text-white" />
                      </div>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-off-white">{label}</span>
                    </Cmp>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* ─── Section: Stats ─── */}
          <div className="px-4 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">By the Numbers</p>
                <h2 className="font-display text-xl font-bold text-off-white mt-1">Track record</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative bg-card border border-border rounded-2xl p-4 overflow-hidden"
                >
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-rose/10 flex items-center justify-center">
                    <s.icon size={12} className="text-rose" />
                  </div>
                  <div className="font-display text-3xl font-bold text-gradient-modern leading-none mb-1">{s.value}</div>
                  <div className="font-mono text-[9px] tracking-widest uppercase text-muted">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Section: What I Do ─── */}
          <div className="mb-8">
            <div className="px-4 mb-4 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">What I Do</p>
                <h2 className="font-display text-xl font-bold text-off-white mt-1">Two disciplines</h2>
              </div>
            </div>

            {/* Horizontal snap-scroll cards */}
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 px-4 no-scrollbar">
              {portfolioCards.map((card, i) => (
                <motion.div
                  key={card.to}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="snap-start flex-shrink-0 w-[78vw] max-w-[320px]"
                >
                  <Link
                    to={card.to}
                    className="block h-full bg-card border border-border rounded-3xl p-5 relative overflow-hidden active:scale-[0.98] transition-transform"
                  >
                    <div
                      className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-25 blur-3xl pointer-events-none"
                      style={{ background: card.accent }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${card.accent}30, ${card.accent}12)`,
                            boxShadow: `0 8px 20px -8px ${card.accent}66`,
                          }}
                        >
                          <card.icon size={20} style={{ color: card.accent }} strokeWidth={1.8} />
                        </div>
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[9px] tracking-widest uppercase"
                          style={{
                            background: `${card.accent}15`,
                            color: card.accent,
                            border: `1px solid ${card.accent}40`,
                          }}
                        >
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-off-white mb-2 leading-tight">{card.title}</h3>
                      <p className="font-body text-xs text-muted leading-relaxed mb-5">{card.description}</p>
                      <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase" style={{ color: card.accent }}>
                        <span>Explore</span>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: `${card.accent}22`, border: `1px solid ${card.accent}55` }}>
                          <ArrowUpRight size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Section: Trusted at (horizontal scroll) ─── */}
          <div className="mb-8">
            <div className="px-4 mb-3">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Trusted At</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">Companies served</h2>
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 px-4">
              {['Teleperformance', 'The Call Guru', 'Zili Capital', 'OCTAFX', 'GemCommerce', 'Benorch'].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex-shrink-0 px-4 py-2.5 rounded-full bg-card border border-border font-display text-sm font-medium text-off-white/80 whitespace-nowrap"
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Section: Capabilities grid ─── */}
          <div className="px-4 mb-8">
            <div className="mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Capabilities</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">How I deliver</h2>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card border border-border rounded-2xl p-4 active:scale-[0.97] transition-transform"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center mb-3">
                    <c.icon size={16} className="text-rose" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-sm font-bold text-off-white mb-1 leading-tight">{c.title}</h3>
                  <p className="font-body text-[11px] text-muted leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── About preview card ─── */}
          <div className="px-4 mb-8">
            <Link
              to="/about"
              className="block relative rounded-3xl overflow-hidden bg-card border border-border p-5 active:scale-[0.98] transition-transform"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-rose/25 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex items-center gap-4">
                <img
                  src={aboutCircleImg}
                  alt="Angela"
                  className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-rose/30 shadow-lg shadow-rose/20 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-rose mb-1.5">About Me</p>
                  <h3 className="font-display text-lg font-bold text-off-white leading-tight mb-1">The full story →</h3>
                  <p className="font-body text-[11px] text-muted leading-snug">
                    From soil science to serving fintech clients — one relentless focus.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* ─── Big CTA card ─── */}
          <div className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-6 overflow-hidden border border-border bg-gradient-to-br from-rose/20 via-card to-gold/15"
            >
              <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-rose/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-gold/25 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-rose/40 bg-rose/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[9px] tracking-widest uppercase text-rose">Available Now</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-off-white leading-tight mb-2">
                  Let's build your <span className="text-gradient-modern">customer engine</span>.
                </h2>
                <p className="font-body text-xs text-muted mb-5 leading-relaxed">
                  Book a discovery call — we'll map out how I can help you ship better support and close more leads.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-rose to-rose-dark text-white font-body text-xs font-semibold tracking-wider uppercase rounded-full active:scale-[0.97] transition-transform shadow-lg shadow-rose/30"
                >
                  Send a Message <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ✱ DESKTOP VIEW (hidden lg:block)
      ══════════════════════════════════════════ */}
      <div className="hidden lg:block">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-rose/15 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[100px]" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="max-w-7xl mx-auto px-12 w-full py-20 relative z-10">
            <div className="grid grid-cols-12 gap-16 items-center">
              <div className="col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-rose/30 bg-rose/[0.08] backdrop-blur-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-rose">
                    Available for Opportunities · Lagos, NG
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-display font-semibold leading-[0.98] tracking-tight mb-6"
                >
                  <span className="block text-7xl text-off-white">Hi, I'm Angela.</span>
                  <span className="block text-7xl text-gradient-modern mt-2">
                    I turn conversations
                  </span>
                  <span className="block text-7xl text-off-white/90 mt-2">
                    into <span className="italic font-script text-gold text-8xl">customers</span>.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="font-body text-lg text-muted leading-relaxed max-w-2xl mb-10"
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

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="col-span-5 flex justify-center relative"
              >
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-rose/25 to-gold/20 blur-3xl" />
                  <div className="relative">
                    <img
                      src={heroImg}
                      alt="Angela Okorie"
                      className="w-[380px] h-[500px] object-cover object-top rounded-[2.5rem] shadow-2xl shadow-rose/20 border border-white/10"
                    />

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="absolute -top-4 -left-10 bg-card/95 backdrop-blur-xl border border-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-rose/15 flex items-center justify-center">
                        <Star size={18} className="text-rose" fill="currentColor" />
                      </div>
                      <div>
                        <p className="font-display text-lg font-bold text-off-white leading-none">98%</p>
                        <p className="font-mono text-[9px] tracking-widest uppercase text-muted mt-0.5">CSAT</p>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -bottom-4 -right-10 bg-card/95 backdrop-blur-xl border border-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                        <Target size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-display text-lg font-bold text-off-white leading-none">10K+</p>
                        <p className="font-mono text-[9px] tracking-widest uppercase text-muted mt-0.5">Leads</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="absolute top-1/2 -translate-y-1/2 -right-16 bg-bg/90 backdrop-blur-xl border border-rose/40 rounded-full px-4 py-2 shadow-lg rotate-90 origin-center"
                    >
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rose">Lagos · NG</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-7xl mx-auto px-12 py-24 relative">
          <div className="grid grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-card border border-border rounded-3xl p-7 hover:border-rose/40 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.3)] transition-all duration-300"
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-rose/10 flex items-center justify-center group-hover:bg-rose/20 transition-colors">
                  <s.icon size={14} className="text-rose" />
                </div>
                <div className="font-display text-5xl font-bold text-gradient-modern mb-2 leading-none">{s.value}</div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="max-w-7xl mx-auto px-12 py-24">
          <div className="max-w-2xl mb-16">
            <SectionLabel>What I Do</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl font-semibold text-off-white mb-4 tracking-tight leading-tight"
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

          <div className="grid grid-cols-2 gap-6">
            {portfolioCards.map((card, i) => (
              <PortfolioCard key={card.to} {...card} index={i} />
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="bg-surface border-y border-border py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="font-display text-5xl font-semibold text-off-white mb-4 tracking-tight">
                How I deliver <span className="text-gradient-modern">results</span>
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-5">
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

        {/* ABOUT PREVIEW */}
        <section className="max-w-7xl mx-auto px-12 py-24">
          <div className="grid grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-rose/20 to-gold/15 blur-3xl" />
                <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <img src={aboutCircleImg} alt="Angela" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                </div>

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
                className="font-display text-5xl font-semibold text-off-white mb-6 tracking-tight leading-tight"
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

        {/* CONTACT CTA */}
        <section className="max-w-7xl mx-auto px-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2.5rem] p-16 overflow-hidden border border-border bg-gradient-to-br from-rose/15 via-card to-gold/10"
          >
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-rose/25 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />

            <div className="relative z-10 flex flex-row items-center gap-8 justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-rose/30 bg-rose/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Available Now</span>
                </div>
                <h2 className="font-display text-5xl font-semibold text-off-white leading-tight tracking-tight mb-3">
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
      </div>
    </motion.div>
  )
}
