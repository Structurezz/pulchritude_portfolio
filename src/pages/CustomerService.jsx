import { motion } from 'framer-motion'
import { Star, MessageSquare, Users, CheckCircle } from 'lucide-react'
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

export default function CustomerService() {
  return (
    <motion.div {...pageTransition}>
      <HeroSection
        label="Customer Service"
        title={
          <>
            People-First{' '}
            <span className="text-gradient-gold italic">Excellence</span>
          </>
        }
        subtitle="Customer Care Specialist — CRM Expert — People-First Professional"
        description="With over 6 years of experience across fintech, e-commerce, and BPO sectors, Angela brings warmth, precision, and professionalism to every client interaction."
        accentColor="#14B8A6"
      />

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '6+', label: 'Years Experience' },
            { value: '5', label: 'Companies Served' },
            { value: '3', label: 'CRM Platforms' },
            { value: '100%', label: 'SLA Commitment' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center group hover:border-rose/30 hover:shadow-[0_0_30px_rgba(212,132,154,0.08)] transition-all duration-300"
            >
              <div className="font-display text-4xl md:text-5xl font-light text-gradient-gold mb-2">{s.value}</div>
              <div className="font-mono text-xs tracking-widest uppercase text-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ILLUSTRATION + INTRO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Circle frame illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-full bg-teal-500/10 blur-2xl" />
              {/* Gradient border ring */}
              <div
                className="absolute -inset-1.5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #14B8A6, #D4849A, #C9A84C, #14B8A6)',
                  padding: '3px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              {/* Circle image */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden relative z-10 border-4 border-bg">
                <img
                  src={csIllustration}
                  alt="Angela — Customer Service Professional"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-5 py-2 whitespace-nowrap shadow-lg z-20"
              >
                <span className="font-script text-xl text-gradient-rose">Customer Expert</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <SectionLabel>Who She Is</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-light text-off-white mb-6 leading-tight"
            >
              Empathy Meets{' '}
              <span className="text-gradient-rose italic">Excellence</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-muted leading-relaxed"
            >
              Angela has spent over 6 years building genuine client relationships across fintech, e-commerce,
              and global BPO operations. Her philosophy is simple: every customer deserves to feel heard,
              valued, and helped — every single time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionLabel>Experience</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          Career Timeline
        </motion.h2>
        {timeline.map((item, i) => (
          <TimelineItem key={i} {...item} index={i} />
        ))}
      </section>

      {/* SKILLS */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Core Skills</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light text-off-white mb-10"
          >
            Capabilities & Tools
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => <SkillTag key={s} index={i}>{s}</SkillTag>)}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Key Achievements</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          Proven Results
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-rose/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(212,132,154,0.08)]"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-5 group-hover:border-teal-500/40 transition-colors">
                <a.icon size={20} className="text-teal-400" />
              </div>
              <h3 className="font-display text-xl font-medium text-off-white mb-3">{a.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
