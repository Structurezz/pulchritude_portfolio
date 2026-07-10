import { motion } from 'framer-motion'
import { Target, Phone, Users, TrendingUp, CheckCircle2, Zap, BarChart3, Mail } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionLabel from '../components/SectionLabel'
import TimelineItem from '../components/TimelineItem'
import SkillTag from '../components/SkillTag'
import leadImg from '../assets/WhatsApp Image 2026-04-25 at 14.17.01.jpeg'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const timeline = [
  {
    id: 'role-call-guru-current',
    role: 'Lead Generation Specialist',
    company: 'The Call Guru',
    period: 'Jan 2024 — Present',
    description:
      'Driving B2B and B2C lead generation campaigns for international clients. Managing cold outreach, lead qualification, appointment setting, and CRM pipeline hygiene. Consistently exceeding weekly qualified-lead targets while maintaining top conversion quality.',
  },
  {
    role: 'Outbound Sales & Lead Qualifier',
    company: 'The Call Guru',
    period: 'Jun 2023 — Dec 2023',
    description:
      'Executed high-volume outbound calling campaigns across multiple industries. Built rapport with decision-makers, qualified prospects against ICP criteria, and handed off SQL-grade leads to closing teams.',
  },
  {
    role: 'Client Acquisition Support',
    company: 'Zili Capital',
    period: 'Dec 2022 — Present',
    description:
      'Supporting client onboarding and retention alongside customer service duties — converting inbound inquiries into funded accounts through consultative sales conversations.',
  },
  {
    role: 'Front Desk / Client Onboarding',
    company: 'OCTAFX',
    period: '2020 — Mar 2023',
    description:
      'First point of contact for prospective FX brokerage clients. Nurtured warm leads through account setup, KYC, and first deposit — bridging service and sales.',
  },
]

const skills = [
  'Cold Calling', 'Cold Email Outreach', 'B2B Prospecting', 'ICP Qualification',
  'Appointment Setting', 'CRM Pipeline Management', 'HubSpot', 'Salesforce',
  'Apollo.io', 'LinkedIn Sales Navigator', 'Objection Handling', 'Discovery Calls',
  'Lead Nurturing', 'Follow-Up Sequences', 'Sales Reporting', 'KPI Tracking',
]

const achievements = [
  {
    icon: Target,
    title: 'Exceeded Weekly Targets',
    description:
      'Consistently surpassed weekly qualified-lead quotas at The Call Guru by an average of 20%, contributing to team-wide pipeline growth.',
  },
  {
    icon: Phone,
    title: 'High Connect Rate',
    description:
      'Averaged 45+ meaningful conversations per day through disciplined dialing cadence and warm opener frameworks.',
  },
  {
    icon: TrendingUp,
    title: 'Strong Conversion Quality',
    description:
      'Delivered SQL-grade leads that closed above the team average — earning a reputation with account executives for pipeline that converts.',
  },
  {
    icon: Users,
    title: 'Multi-Industry Reach',
    description:
      'Ran campaigns across fintech, SaaS, real estate, and professional services — quickly adapting scripts and personas to each vertical.',
  },
]

const process = [
  { step: '01', title: 'ICP Research', desc: 'Nailing down who to call, why, and when.' },
  { step: '02', title: 'Personalized Outreach', desc: 'Cold calls & emails written for humans, not lists.' },
  { step: '03', title: 'Discovery & Qualification', desc: 'BANT / MEDDIC framework applied conversationally.' },
  { step: '04', title: 'Booked Meetings', desc: 'Warm hand-off to your closers with full context.' },
]

export default function LeadGeneration() {
  return (
    <motion.div {...pageTransition}>
      <HeroSection
        label="Lead Generation"
        title={
          <>
            Turning cold lists <br />
            into <span className="text-gradient-modern italic">warm pipeline.</span>
          </>
        }
        subtitle="B2B Prospecting · Cold Outreach · Appointment Setting"
        description="I run outbound campaigns that respect prospects' time and hit revenue targets — currently powering pipeline at The Call Guru for international B2B and B2C clients."
        accentColor="#34D399"
        accentClass="text-gold"
      />

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            { value: '10K+', label: 'Leads Qualified', icon: Target },
            { value: '45+', label: 'Daily Conversations', icon: Phone },
            { value: '20%', label: 'Above Weekly Quota', icon: TrendingUp },
            { value: '4', label: 'Verticals Covered', icon: BarChart3 },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-card border border-border rounded-3xl p-5 md:p-7 hover:border-gold/50 hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.3)] transition-all duration-300"
            >
              <div className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <s.icon size={14} className="text-gold" />
              </div>
              <div className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-1 md:mb-2 leading-none">{s.value}</div>
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
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-gold/25 to-rose/15 blur-3xl" />
              <div className="relative w-72 h-96 md:w-96 md:h-[26rem] rounded-[2rem] overflow-hidden border border-border shadow-2xl">
                <img src={leadImg} alt="Angela — Lead Generation" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-5 py-2.5 whitespace-nowrap shadow-xl"
              >
                <span className="font-display text-base font-semibold text-gradient-gold">The Call Guru</span>
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
              Conversations that <span className="text-gradient-gold">convert</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-muted leading-relaxed mb-5"
            >
              Cold outreach gets a bad reputation because most of it is bad. I don't do bad. Every dial, every email, every LinkedIn message is personalized, timely, and built around a genuine reason to reach out.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-muted leading-relaxed"
            >
              At <span className="text-gold font-medium">The Call Guru</span> I've built pipeline for clients across fintech, SaaS, real estate, and professional services — showing up every day with the discipline of a trader and the empathy of a customer success lead.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface border-y border-border py-16 md:py-24 mt-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-rose/8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-12 tracking-tight">
            How I fill your <span className="text-gradient-gold">calendar</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="font-display text-6xl font-bold text-gold/15 absolute top-4 right-6 group-hover:text-gold/25 transition-colors">
                  {p.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-4 relative">
                  <Zap size={18} className="text-gold" strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg font-semibold text-off-white mb-2 relative">{p.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed relative">{p.desc}</p>
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
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
          <SectionLabel>Core Skills</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-10 tracking-tight"
          >
            Tools & Tactics
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => <SkillTag key={s} index={i}>{s}</SkillTag>)}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-24">
        <SectionLabel>Key Results</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-12 tracking-tight"
        >
          Proven <span className="text-gradient-gold">outcomes</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-3xl p-7 md:p-9 hover:border-gold/50 hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.3)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/25 to-gold/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <a.icon size={22} className="text-gold" strokeWidth={1.8} />
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
