import { motion } from 'framer-motion'
import { Briefcase, Target, Globe, Handshake, TrendingUp, Users, Lightbulb, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SectionLabel from '../components/SectionLabel'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const ventures = [
  {
    icon: TrendingUp,
    title: 'Financial Markets',
    desc: 'Running independent trading operations and providing market analysis services to traders and firms across Africa.',
    accent: '#3B82F6',
  },
  {
    icon: Users,
    title: 'Customer Experience Consulting',
    desc: 'Advising businesses on customer service strategy, CRM implementation, and team training for measurable satisfaction improvements.',
    accent: '#14B8A6',
  },
  {
    icon: Globe,
    title: 'Culinary Enterprise',
    desc: 'Building a food brand centred on premium Nigerian and continental dining — private events, catering, and meal subscription services.',
    accent: '#F97316',
  },
  {
    icon: Lightbulb,
    title: 'Personal Brand & Media',
    desc: 'Developing a personal brand that spans music, lifestyle, and business education — creating content that inspires multi-dimensional ambition.',
    accent: '#A855F7',
  },
]

const consultingServices = [
  {
    title: 'Business Strategy',
    desc: 'End-to-end strategy development for startups and growing businesses — from vision to execution.',
  },
  {
    title: 'Brand Development',
    desc: 'Building authentic, memorable brands that stand out in competitive markets.',
  },
  {
    title: 'Customer Experience Design',
    desc: 'Mapping and optimising customer journeys for maximum satisfaction and retention.',
  },
  {
    title: 'Trading Education',
    desc: 'Mentoring and coaching aspiring traders on risk management, technical analysis, and prop firm strategies.',
  },
  {
    title: 'Event & Experiential Marketing',
    desc: 'Creating immersive events that marry culinary, entertainment, and brand storytelling.',
  },
  {
    title: 'Partnerships & Collaboration',
    desc: 'Connecting complementary businesses and creatives for impactful joint ventures.',
  },
]

const values = [
  { icon: Target, label: 'Precision', desc: 'Every decision is backed by data, analysis, and intentionality.' },
  { icon: Handshake, label: 'Integrity', desc: 'Transparent dealings, honest communication, and trust-first relationships.' },
  { icon: Globe, label: 'Global Thinking', desc: 'Nigerian roots, international standards — building for the world stage.' },
  { icon: Lightbulb, label: 'Innovation', desc: 'Challenging conventions and finding new paths in every industry she touches.' },
]

export default function Business() {
  return (
    <motion.div {...pageTransition}>
      <HeroSection
        label="Entrepreneurship"
        title={
          <>
            Building{' '}
            <span className="italic" style={{ color: '#10B981' }}>Empires</span>
          </>
        }
        subtitle="Entrepreneur — Business Strategist — Brand Builder"
        description="Angela does not choose between industries — she masters them. Her entrepreneurial philosophy is rooted in building multiple streams of excellence that reinforce and amplify each other into a unified brand of impact."
        accentColor="#10B981"
      />

      {/* VENTURES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionLabel>Business Ventures</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          Her Business Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ventures.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-8 group hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]"
            >
              <div
                className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-opacity-60 transition-colors"
                style={{ borderColor: `${v.accent}40` }}
              >
                <v.icon size={20} style={{ color: v.accent }} />
              </div>
              <h3 className="font-display text-2xl font-medium text-off-white mb-3 group-hover:text-emerald-300 transition-colors">
                {v.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel className="justify-center">Business Philosophy</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-light text-off-white mb-8"
            >
              Mission & Vision
            </motion.h2>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-2xl md:text-3xl italic font-light text-gold/90 leading-relaxed mb-8"
            >
              "Excellence is not a lane — it is a standard applied to every lane you choose to enter."
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-muted leading-relaxed"
            >
              Angela's mission is to prove that a Nigerian woman can hold the top position in multiple
              industries simultaneously — not as a jack of all trades, but as a master of each. Her
              vision is a fully integrated personal brand and business ecosystem that serves clients,
              creates jobs, and inspires the next generation of multi-dimensional African entrepreneurs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Core Values</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          What Drives Her
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((val, i) => (
            <motion.div
              key={val.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-6 text-center group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center mx-auto mb-5 group-hover:border-emerald-500/40 transition-colors">
                <val.icon size={20} className="text-emerald-400" />
              </div>
              <h3 className="font-display text-xl font-medium text-gold mb-3">{val.label}</h3>
              <p className="font-body text-xs text-muted leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONSULTING SERVICES */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Services Offered</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
          >
            Consulting & Collaboration
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {consultingServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border p-7 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="w-8 h-px bg-emerald-500 mb-5" />
                <h3 className="font-display text-xl font-medium text-off-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {svc.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="border border-border p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,#10B98110_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <Briefcase size={32} className="text-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-off-white mb-4">
              Let's Build Together
            </h2>
            <p className="font-body text-muted max-w-lg mx-auto mb-10">
              Whether you're looking for a strategic partner, a consultant, or a collaborator,
              Angela is open to meaningful connections that create real impact.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-bg font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
            >
              Connect Now <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
