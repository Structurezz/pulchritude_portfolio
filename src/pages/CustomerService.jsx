import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Star, MessageSquare, Users, CheckCircle, Headphones, Clock, Heart, Zap,
  MapPin, ArrowUpRight, Mail, Phone,
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionLabel from '../components/SectionLabel'
import TimelineItem from '../components/TimelineItem'
import SkillTag from '../components/SkillTag'
import csIllustration from '../assets/WhatsApp Image 2026-04-25 at 13.44.58.jpeg'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const timeline = [
  {
    role: 'Customer Care Representative',
    company: 'Zili Capital',
    period: 'Dec 2022 — Present',
    description:
      'Handling client inquiries, account support, and onboarding for a fintech/trading platform. Maintaining high satisfaction rates through proactive communication and quick issue resolution.',
  },
  {
    role: 'Customer Care Representative',
    company: 'Teleperformance Group',
    period: 'May 2023 — Dec 2025',
    description:
      'Managed high-volume customer interactions across multiple channels for a global BPO leader. Maintained SLA compliance, CRM accuracy, and top-tier CSAT scores throughout tenure.',
  },
  {
    role: 'Front Desk / Customer Support Assistant',
    company: 'OCTAFX',
    period: '2020 — Mar 2023',
    description:
      'Served as the first point of contact for FX brokerage clients. Handled account queries, deposit/withdrawal support, and escalation management in a fast-paced financial services environment.',
  },
  {
    role: 'Customer Service Associate',
    company: 'GemCommerce',
    period: '2019 — 2020',
    description:
      'Managed e-commerce customer interactions including order tracking, product inquiries, returns and refund processing, and complaint resolution.',
  },
  {
    role: 'Customer Support Representative',
    company: 'Benorch Global Concept',
    period: 'Aug 2018 — Jun 2019',
    description:
      'Entry-level customer support role providing telephone and email assistance, building a strong foundation in client relationship management and service excellence.',
  },
]

const skills = [
  'Live Chat Support', 'Email Support', 'Phone Support', 'Zendesk', 'Freshdesk',
  'Intercom', 'Complaint Resolution', 'Order Management', 'Refund Processing',
  'Ticket Management', 'SLA Compliance', 'CRM Systems', 'Customer Onboarding',
  'Escalation Handling', 'KPI Reporting', 'Active Listening',
]

const achievements = [
  {
    icon: Star,
    title: 'High CSAT Ratings',
    description:
      'Consistently achieved above-benchmark Customer Satisfaction Scores across multiple employers, reflecting a genuine commitment to client-first service.',
  },
  {
    icon: MessageSquare,
    title: 'Minimal Escalation Rate',
    description:
      'Maintained one of the lowest escalation rates on the team by resolving complex issues at first contact through empathy and product knowledge.',
  },
  {
    icon: Users,
    title: 'Improved Response Times',
    description:
      'Contributed to team initiatives that reduced average response and resolution times, improving overall SLA performance metrics.',
  },
  {
    icon: CheckCircle,
    title: 'Multi-Channel Expertise',
    description:
      'Proven ability to manage simultaneous customer touchpoints — live chat, email, phone, and ticketing systems — without compromising quality.',
  },
]

const philosophy = [
  { icon: Heart, title: 'Empathy first', desc: 'Every ticket is a person, not a queue item.' },
  { icon: Zap, title: 'Fast resolution', desc: 'Answer once, answer well, close the loop.' },
  { icon: Clock, title: 'On-time always', desc: 'SLA commitments are non-negotiable.' },
  { icon: Headphones, title: 'Multi-channel', desc: 'Chat, email, phone, socials — fluent in all.' },
]

const stats = [
  { value: '6+', label: 'Years Experience', icon: Clock },
  { value: '5', label: 'Companies Served', icon: Users },
  { value: '98%', label: 'CSAT Average', icon: Star },
  { value: '100%', label: 'SLA Commitment', icon: CheckCircle },
]

export default function CustomerService() {
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
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-rose">Customer Service</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-3xl font-bold text-off-white leading-[1.05] tracking-tight"
            >
              People-first support, <br />
              <span className="text-gradient-modern italic">precision-driven results.</span>
            </motion.h1>
            <p className="font-body text-sm text-muted mt-3 leading-relaxed">
              6+ years across fintech, e-commerce, and BPO — bringing warmth and precision to every interaction.
            </p>
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
                  src={csIllustration}
                  alt="Angela — Customer Service"
                  className="w-full h-[420px] object-cover object-center rounded-[2rem]"
                />

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md">
                  <Headphones size={11} className="text-black" />
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-black">CS Expert</span>
                </div>

                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md">
                  <Star size={11} className="text-gold" fill="currentColor" />
                  <span className="font-mono text-[10px] font-bold tracking-wide uppercase text-black">98% CSAT</span>
                </div>
              </div>

              {/* Info block */}
              <div className="mt-3 bg-white rounded-2xl px-4 py-3 shadow-md flex items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-black/60 mb-1">Currently at</p>
                  <p className="font-display text-lg font-bold text-black leading-tight">Zili Capital</p>
                  <p className="font-body text-xs text-black/70 mt-0.5">Customer Care · Fintech</p>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-black flex items-center justify-center">
                  <Headphones size={18} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── Stats ─── */}
          <div className="px-4 mb-8">
            <div className="mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">By the Numbers</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">Track record</h2>
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

          {/* ─── Philosophy snap-scroll ─── */}
          <div className="mb-8">
            <div className="px-4 mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">How I Work</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">Support principles</h2>
            </div>
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 px-4 no-scrollbar">
              {philosophy.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="snap-start flex-shrink-0 w-[65vw] max-w-[260px] bg-card border border-border rounded-3xl p-5"
                >
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center mb-4">
                    <p.icon size={18} className="text-rose" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-base font-bold text-off-white mb-1.5 leading-tight">{p.title}</h3>
                  <p className="font-body text-xs text-muted leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Intro paragraphs ─── */}
          <div className="px-4 mb-8">
            <div className="mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Who I Am</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">
                Empathy meets <span className="text-gradient-modern">excellence</span>
              </h2>
            </div>
            <div className="bg-card border border-border rounded-3xl p-5 space-y-3">
              <p className="font-body text-[13px] text-muted leading-relaxed">
                I've spent over 6 years building genuine client relationships across fintech, e-commerce, and global BPO operations. Every customer deserves to feel heard, valued, and helped — every single time.
              </p>
              <p className="font-body text-[13px] text-muted leading-relaxed">
                From Teleperformance's high-volume queues to Zili Capital's fintech onboarding flow, I bring the same discipline to every channel — chat, email, phone, ticketing — with the same commitment to first-contact resolution.
              </p>
            </div>
          </div>

          {/* ─── Timeline ─── */}
          <div className="px-4 mb-8">
            <div className="mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Experience</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">Career timeline</h2>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-rose/60 via-border to-transparent" />
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative pb-5 last:pb-0"
                >
                  <div className="absolute -left-[22px] top-1 w-3.5 h-3.5 rounded-full border-2 border-rose bg-bg" />
                  <div className="bg-card border border-border rounded-2xl p-4">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-rose mb-1">{item.company}</p>
                    <h3 className="font-display text-sm font-bold text-off-white leading-tight mb-1.5">{item.role}</h3>
                    <span className="inline-block font-mono text-[9px] tracking-widest text-muted border border-border rounded-full px-2 py-0.5 bg-surface mb-2">
                      {item.period}
                    </span>
                    <p className="font-body text-[11px] text-muted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Skills chip row ─── */}
          <div className="mb-8">
            <div className="px-4 mb-3">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Core Skills</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">Capabilities & tools</h2>
            </div>
            <div className="flex flex-wrap gap-2 px-4">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="px-3 py-1.5 rounded-full bg-card border border-border font-display text-xs text-off-white/80"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ─── Achievements ─── */}
          <div className="px-4 mb-8">
            <div className="mb-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">Key Achievements</p>
              <h2 className="font-display text-xl font-bold text-off-white mt-1">
                Proven <span className="text-gradient-modern">results</span>
              </h2>
            </div>
            <div className="space-y-2.5">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card border border-border rounded-2xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose/25 to-gold/15 flex items-center justify-center flex-shrink-0">
                      <a.icon size={16} className="text-rose" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-sm font-bold text-off-white mb-1 leading-tight">{a.title}</h3>
                      <p className="font-body text-[11px] text-muted leading-relaxed">{a.description}</p>
                    </div>
                  </div>
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
                  <span className="font-mono text-[9px] tracking-widest uppercase text-rose">Available Now</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-off-white leading-tight mb-2">
                  Need better <span className="text-gradient-modern">support?</span>
                </h2>
                <p className="font-body text-xs text-muted mb-5 leading-relaxed">
                  Let's talk about how I can help you ship higher CSAT and lower escalation.
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
        <HeroSection
          label="Customer Service"
          title={
            <>
              People-first support, <br />
              <span className="text-gradient-modern italic">precision-driven results.</span>
            </>
          }
          subtitle="Customer Care Specialist · CRM Expert · Multi-Channel Support"
          description="6+ years across fintech, e-commerce, and BPO — bringing warmth, precision, and professionalism to every client interaction."
          accentColor="#818CF8"
        />

        {/* STATS */}
        <section className="max-w-7xl mx-auto px-12 pb-24">
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

        {/* INTRO */}
        <section className="max-w-7xl mx-auto px-12 py-10">
          <div className="grid grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center relative"
            >
              <div className="relative">
                <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-rose/25 to-gold/15 blur-3xl" />
                <div className="relative w-96 h-[26rem] rounded-[2rem] overflow-hidden border border-border shadow-2xl">
                  <img src={csIllustration} alt="Angela — Customer Service Professional" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
                </div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-5 py-2.5 whitespace-nowrap shadow-xl"
                >
                  <span className="font-display text-base font-semibold text-gradient-modern">Customer Expert</span>
                </motion.div>
              </div>
            </motion.div>

            <div>
              <SectionLabel>Who I Am</SectionLabel>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-5xl font-semibold text-off-white mb-6 leading-tight tracking-tight"
              >
                Empathy meets <span className="text-gradient-modern">excellence</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body text-muted leading-relaxed mb-5"
              >
                I've spent over 6 years building genuine client relationships across fintech, e-commerce, and global BPO operations. My philosophy is simple: every customer deserves to feel heard, valued, and helped — every single time.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-muted leading-relaxed"
              >
                From Teleperformance's high-volume queues to Zili Capital's fintech onboarding flow, I bring the same discipline to every channel — chat, email, phone, ticketing — with the same commitment to first-contact resolution.
              </motion.p>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-surface border-y border-border py-24 mt-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-12 relative z-10">
            <SectionLabel>How I Work</SectionLabel>
            <h2 className="font-display text-5xl font-semibold text-off-white mb-12 tracking-tight">
              Support <span className="text-gradient-modern">principles</span>
            </h2>

            <div className="grid grid-cols-4 gap-5">
              {philosophy.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-card border border-border rounded-3xl p-7 hover:border-rose/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-rose" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-off-white mb-2">{p.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="max-w-7xl mx-auto px-12 py-24">
          <SectionLabel>Experience</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-semibold text-off-white mb-12 tracking-tight"
          >
            Career Timeline
          </motion.h2>
          {timeline.map((item, i) => (
            <TimelineItem key={i} {...item} index={i} />
          ))}
        </section>

        {/* SKILLS */}
        <section className="bg-surface border-y border-border py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-12 relative z-10">
            <SectionLabel>Core Skills</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl font-semibold text-off-white mb-10 tracking-tight"
            >
              Capabilities & Tools
            </motion.h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, i) => <SkillTag key={s} index={i}>{s}</SkillTag>)}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="max-w-7xl mx-auto px-12 py-24">
          <SectionLabel>Key Achievements</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-semibold text-off-white mb-12 tracking-tight"
          >
            Proven <span className="text-gradient-modern">results</span>
          </motion.h2>
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-3xl p-9 hover:border-rose/50 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.3)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose/25 to-gold/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <a.icon size={22} className="text-rose" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-off-white mb-3">{a.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}
