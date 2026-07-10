import { motion } from 'framer-motion'
import { Star, MessageSquare, Users, CheckCircle, Headphones, Clock, Heart, Zap } from 'lucide-react'
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

export default function CustomerService() {
  return (
    <motion.div {...pageTransition}>
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
      <section className="max-w-7xl mx-auto px-5 md:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            { value: '6+', label: 'Years Experience', icon: Clock },
            { value: '5', label: 'Companies Served', icon: Users },
            { value: '98%', label: 'CSAT Average', icon: Star },
            { value: '100%', label: 'SLA Commitment', icon: CheckCircle },
          ].map((s, i) => (
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

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-rose/25 to-gold/15 blur-3xl" />
              <div className="relative w-72 h-96 md:w-96 md:h-[26rem] rounded-[2rem] overflow-hidden border border-border shadow-2xl">
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
              className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-6 leading-tight tracking-tight"
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
      <section className="bg-surface border-y border-border py-16 md:py-24 mt-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-12 tracking-tight">
            Support <span className="text-gradient-modern">principles</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-3xl p-6 md:p-7 hover:border-rose/50 hover:-translate-y-1 transition-all duration-300"
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
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-24">
        <SectionLabel>Experience</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-12 tracking-tight"
        >
          Career Timeline
        </motion.h2>
        {timeline.map((item, i) => (
          <TimelineItem key={i} {...item} index={i} />
        ))}
      </section>

      {/* SKILLS */}
      <section className="bg-surface border-y border-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
          <SectionLabel>Core Skills</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-10 tracking-tight"
          >
            Capabilities & Tools
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => <SkillTag key={s} index={i}>{s}</SkillTag>)}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-24">
        <SectionLabel>Key Achievements</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-12 tracking-tight"
        >
          Proven <span className="text-gradient-modern">results</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-3xl p-7 md:p-9 hover:border-rose/50 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.3)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose/25 to-gold/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <a.icon size={22} className="text-rose" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-off-white mb-3">{a.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
