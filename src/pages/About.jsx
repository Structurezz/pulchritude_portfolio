import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  GraduationCap, MapPin, Mail, Phone, Heart, Star, Target, Headphones,
  MessageSquare, ArrowUpRight, Sparkles,
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import circleImg from '../assets/image6.jpeg'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const careerTimeline = [
  { year: '2018', event: 'Started professional career in customer service at Benorch Global Concept, Lagos' },
  { year: '2019', event: 'Joined GemCommerce as a Customer Service Associate — e-commerce ticketing, refunds, and complaint resolution' },
  { year: '2020', event: 'Moved to OCTAFX as Front Desk & Customer Support Assistant — first exposure to fintech client onboarding' },
  { year: '2022', event: 'Joined Zili Capital as Customer Care Representative for fintech clients' },
  { year: '2023', event: 'Joined Teleperformance Group as CS Representative; began outbound sales work at The Call Guru' },
  { year: '2024', event: 'Promoted to Lead Generation Specialist at The Call Guru — running B2B campaigns for international clients' },
  { year: '2026', event: 'Consolidating Customer Service and Lead Generation expertise into a specialist personal brand' },
]

const education = [
  {
    degree: 'B.Sc. Soil Science',
    institution: 'Abia State University',
    year: '2017',
    icon: GraduationCap,
  },
  {
    degree: 'Senior Secondary Certificate (SSCE)',
    institution: 'Badagry Grammar School',
    year: '',
    icon: GraduationCap,
  },
  {
    degree: 'First School Leaving Certificate (FSLC)',
    institution: 'Ekum Nursery / Primary School',
    year: '',
    icon: GraduationCap,
  },
]

const values = [
  { icon: Heart, label: 'Empathy', desc: 'Every customer is a person first. Listen, understand, then solve.' },
  { icon: Target, label: 'Precision', desc: 'The right lead, the right message, the right moment — every time.' },
  { icon: Headphones, label: 'Presence', desc: 'Show up fully on every call, chat, and email. No autopilot.' },
  { icon: Star, label: 'Standards', desc: 'Above-benchmark CSAT and above-quota pipeline. Non-negotiable.' },
]

const bioParagraphs = [
  `Okorie Angela Chiamaka is a Lagos-based Customer Service and Lead Generation Specialist with 6+ years of experience helping companies win, keep, and delight their customers.`,
  `After completing her Bachelor of Science in Soil Science at Abia State University in 2017, she pivoted into the client-facing side of business — starting at Benorch Global Concept in 2018 and quickly building a reputation for empathy, efficiency, and follow-through.`,
  `Over the next several years, she worked her way through some of the most demanding client environments in Lagos: e-commerce ticketing at GemCommerce, fintech onboarding at OCTAFX, live-account support at Zili Capital, and high-volume multi-channel operations at Teleperformance Group — the global BPO leader.`,
  `In 2023 she joined The Call Guru as an Outbound Sales Representative, and by 2024 had grown into her current role as Lead Generation Specialist — running B2B and B2C campaigns for international clients across fintech, SaaS, real estate, and professional services.`,
  `Today, Angela consolidates the two disciplines she has mastered — Customer Service and Lead Generation — into a single, focused personal brand: helping businesses ship better support and close more of the right customers.`,
]

export default function About() {
  return (
    <motion.div {...pageTransition}>
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose/15 border border-rose/30 mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-rose">About Me</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h1 className="font-display text-3xl font-bold text-off-white leading-[1.05] tracking-tight">
                Okorie <br />
                <span className="text-gradient-modern">Angela Chiamaka</span>
              </h1>
              <p className="font-display text-base italic text-gold mt-3">
                CS Specialist · Lead Gen Expert
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
              <div className="relative">
                <img
                  src={circleImg}
                  alt="Angela"
                  className="w-full h-[420px] object-cover object-top rounded-[2rem]"
                />

                {/* Location tag top-left */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md">
                  <MapPin size={11} className="text-black" />
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-black">Lagos, NG</span>
                </div>

                {/* Years tag top-right */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md">
                  <Sparkles size={11} className="text-gold" fill="currentColor" />
                  <span className="font-mono text-[10px] font-bold tracking-wide uppercase text-black">6+ Years</span>
                </div>
              </div>

              {/* Info block */}
              <div className="mt-3 bg-white rounded-2xl px-4 py-3 shadow-md flex items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-black/60 mb-1">Education</p>
                  <p className="font-display text-lg font-bold text-black leading-tight">B.Sc. Soil Science</p>
                  <p className="font-body text-xs text-black/70 mt-0.5">Abia State University · 2017</p>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-black flex items-center justify-center">
                  <GraduationCap size={18} className="text-white" />
                </div>
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

          {/* ─── Bio ─── */}
          <div className="px-4 mb-8">
            <div className="mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Biography</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">The full story</h2>
            </div>
            <div className="bg-card border border-border rounded-3xl p-5 space-y-4">
              {bioParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="font-body text-[13px] text-muted leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          {/* ─── Values ─── */}
          <div className="px-4 mb-8">
            <div className="mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Personal Values</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">What I stand for</h2>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card border border-border rounded-2xl p-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center mb-3">
                    <v.icon size={16} className="text-rose" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-sm font-bold text-off-white mb-1 leading-tight">{v.label}</h3>
                  <p className="font-body text-[11px] text-muted leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Career Timeline ─── */}
          <div className="px-4 mb-8">
            <div className="mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Career Journey</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">Milestones</h2>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-rose/60 via-border to-transparent" />
              {careerTimeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative pb-5 last:pb-0"
                >
                  <div className="absolute -left-[22px] top-1 w-3.5 h-3.5 rounded-full border-2 border-rose bg-bg" />
                  <span className="inline-block font-mono text-[10px] tracking-widest text-rose border border-rose/40 rounded-full px-2.5 py-0.5 bg-rose/5 mb-1.5">
                    {item.year}
                  </span>
                  <p className="font-body text-[12px] text-muted leading-relaxed">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Education ─── */}
          <div className="px-4 mb-8">
            <div className="mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Academics</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">Education</h2>
            </div>
            <div className="space-y-2.5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-rose" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-bold text-off-white leading-tight">{edu.degree}</h3>
                    <p className="font-body text-[11px] text-muted mt-0.5 truncate">{edu.institution}</p>
                  </div>
                  {edu.year && (
                    <span className="font-mono text-[10px] text-rose border border-rose/40 rounded-full px-2.5 py-0.5 bg-rose/5 whitespace-nowrap flex-shrink-0">
                      {edu.year}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── CTA card ─── */}
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
                  <span className="font-mono text-[9px] tracking-widest uppercase text-rose">Let's Talk</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-off-white leading-tight mb-2">
                  Ready to work <span className="text-gradient-modern">together?</span>
                </h2>
                <p className="font-body text-xs text-muted mb-5 leading-relaxed">
                  Whether you need better support or a warmer pipeline — reach out and I'll respond within 24 hours.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-rose to-rose-dark text-white font-body text-xs font-semibold tracking-wider uppercase rounded-full active:scale-[0.97] transition-transform shadow-lg shadow-rose/30"
                >
                  Get in Touch <ArrowUpRight size={14} />
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
        <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose/15 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>
          <div className="max-w-7xl mx-auto px-12 py-20 w-full relative z-10">
            <div className="grid grid-cols-12 gap-16 items-center">
              <div className="col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-rose/30 bg-rose/[0.08]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-rose">About Me</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-6xl xl:text-7xl font-semibold text-off-white leading-[1.02] mb-6 tracking-tight"
                >
                  Okorie <br />
                  <span className="text-gradient-modern">Angela Chiamaka</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="font-display text-2xl italic text-gold mb-8"
                >
                  Customer Service Specialist · Lead Generation Expert.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="font-body text-muted leading-relaxed max-w-xl"
                >
                  B.Sc. Soil Science, Abia State University · Lagos, Nigeria · 6+ years of client experience across fintech, e-commerce, global BPO and B2B outbound sales.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="col-span-5 flex justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-rose/30 to-gold/20 blur-3xl" />
                  <div className="relative w-80 h-96 rounded-[2rem] overflow-hidden border border-border shadow-2xl">
                    <img src={circleImg} alt="Angela" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                  </div>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-5 py-2.5 whitespace-nowrap shadow-xl"
                  >
                    <span className="font-display text-base font-semibold text-gradient-modern">Lagos, Nigeria</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
        </section>

        {/* FULL BIO */}
        <section className="max-w-7xl mx-auto px-12 py-24">
          <div className="grid grid-cols-3 gap-16">
            <div className="col-span-2">
              <SectionLabel>Biography</SectionLabel>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl font-semibold text-off-white mb-8 tracking-tight"
              >
                The full story
              </motion.h2>
              {bioParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="font-body text-muted leading-relaxed mb-5"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div>
              <SectionLabel>Contact Details</SectionLabel>
              <div className="space-y-3 mb-10">
                {[
                  { icon: Phone, text: '+234 813 820 4756', href: 'tel:+2348138204756' },
                  { icon: Phone, text: '+234 808 313 5808', href: 'tel:+2348083135808' },
                  { icon: Mail, text: 'angieokorie@gmail.com', href: 'mailto:angieokorie@gmail.com' },
                  { icon: MapPin, text: 'Lagos, Nigeria', href: '#' },
                ].map(({ icon: Icon, text, href }, i) => (
                  <motion.a
                    key={text}
                    href={href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 hover:border-rose/50 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-rose/10 flex items-center justify-center group-hover:bg-rose/20 transition-colors">
                      <Icon size={14} className="text-rose flex-shrink-0" />
                    </div>
                    <span className="font-body text-sm text-off-white/80 group-hover:text-off-white transition-colors">
                      {text}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-surface border-y border-border py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-12 relative z-10">
            <SectionLabel>Personal Values</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl font-semibold text-off-white mb-12 tracking-tight"
            >
              What I stand for
            </motion.h2>
            <div className="grid grid-cols-4 gap-5">
              {values.map((val, i) => (
                <motion.div
                  key={val.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-3xl p-6 hover:border-rose/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center mb-4">
                    <val.icon size={20} className="text-rose" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-off-white mb-2">{val.label}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREER TIMELINE */}
        <section className="max-w-7xl mx-auto px-12 py-24">
          <SectionLabel>Career Journey</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-semibold text-off-white mb-12 tracking-tight"
          >
            Milestones
          </motion.h2>
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-rose/60 via-border to-transparent" />
            {careerTimeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-10 pb-8 last:pb-0 group"
              >
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-rose bg-bg group-hover:bg-rose transition-colors duration-300" />
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] tracking-widest text-rose border border-rose/40 rounded-full px-3 py-1 whitespace-nowrap self-start bg-rose/5">
                    {item.year}
                  </span>
                  <p className="font-body text-sm text-muted leading-relaxed pt-0.5">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="bg-surface border-t border-border py-24">
          <div className="max-w-7xl mx-auto px-12">
            <SectionLabel>Education</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl font-semibold text-off-white mb-12 tracking-tight"
            >
              Academic Background
            </motion.h2>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-5 bg-card border border-border rounded-3xl p-7 hover:border-rose/50 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-rose" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-off-white">{edu.degree}</h3>
                    <p className="font-body text-sm text-muted mt-1">{edu.institution}</p>
                  </div>
                  {edu.year && (
                    <span className="font-mono text-[11px] text-rose border border-rose/40 rounded-full px-3 py-1 bg-rose/5 whitespace-nowrap">{edu.year}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}
