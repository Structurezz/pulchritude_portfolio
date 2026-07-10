import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Mail, Phone, Heart, Star, Target, Headphones } from 'lucide-react'
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

export default function About() {
  return (
    <motion.div {...pageTransition}>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose/15 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-20 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-rose/30 bg-rose/[0.08]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-rose">About Me</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-off-white leading-[1.02] mb-6 tracking-tight"
              >
                Okorie <br />
                <span className="text-gradient-modern">Angela Chiamaka</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="font-display text-lg md:text-2xl italic text-gold mb-8"
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

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-rose/30 to-gold/20 blur-3xl" />
                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden border border-border shadow-2xl">
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
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionLabel>Biography</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl font-semibold text-off-white mb-8 tracking-tight"
            >
              The full story
            </motion.h2>
            {[
              `Okorie Angela Chiamaka is a Lagos-based Customer Service and Lead Generation Specialist with 6+ years of experience helping companies win, keep, and delight their customers.`,
              `After completing her Bachelor of Science in Soil Science at Abia State University in 2017, she pivoted into the client-facing side of business — starting at Benorch Global Concept in 2018 and quickly building a reputation for empathy, efficiency, and follow-through.`,
              `Over the next several years, she worked her way through some of the most demanding client environments in Lagos: e-commerce ticketing at GemCommerce, fintech onboarding at OCTAFX, live-account support at Zili Capital, and high-volume multi-channel operations at Teleperformance Group — the global BPO leader.`,
              `In 2023 she joined The Call Guru as an Outbound Sales Representative, and by 2024 had grown into her current role as Lead Generation Specialist — running B2B and B2C campaigns for international clients across fintech, SaaS, real estate, and professional services.`,
              `Today, Angela consolidates the two disciplines she has mastered — Customer Service and Lead Generation — into a single, focused personal brand: helping businesses ship better support and close more of the right customers.`,
            ].map((para, i) => (
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

          {/* Contact sidebar */}
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
      <section className="bg-surface border-y border-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
          <SectionLabel>Personal Values</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-12 tracking-tight"
          >
            What I stand for
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
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
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-24">
        <SectionLabel>Career Journey</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-12 tracking-tight"
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
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
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
      <section className="bg-surface border-t border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <SectionLabel>Education</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-off-white mb-12 tracking-tight"
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
                className="flex items-center gap-5 bg-card border border-border rounded-3xl p-6 md:p-7 hover:border-rose/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-rose" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-off-white">{edu.degree}</h3>
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
    </motion.div>
  )
}
