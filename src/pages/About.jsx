import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Mail, Phone, Heart, Star } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import redDressImg from '../assets/WhatsApp Image 2026-04-25 at 14.17.00.jpeg'
import circleImg from '../assets/image6.jpeg'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const careerTimeline = [
  { year: '2018', event: 'Started professional career in customer service at Benorch Global Concept' },
  { year: '2019', event: 'Joined GemCommerce as a Customer Service Associate' },
  { year: '2020', event: 'Moved to OCTAFX as Front Desk & Customer Support Assistant' },
  { year: '2022', event: 'Began forex trading journey at Zili Capitals; obtained Forex Trading Certification from London Academy of Trading' },
  { year: '2023', event: 'Obtained FRM Part I (GARP); joined FTMO, FundedNext, Audacity Capital, The5ers as a funded trader; published market analysis on Forexbrokers.ng; joined Teleperformance Group' },
  { year: '2024', event: 'Expanded hair styling and culinary ventures; continued music artistry alongside multi-industry work' },
  { year: '2025', event: 'Consolidating all verticals into a unified personal brand; building Angela\'s culinary enterprise and music catalogue' },
]

const education = [
  {
    degree: 'B.Sc. Soil Science',
    institution: 'Abia State University',
    year: '2017',
    icon: GraduationCap,
  },
  {
    degree: 'Senior Secondary Certificate Examination (SSCE)',
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
  { icon: Star, label: 'Excellence', desc: 'Raising the bar in every field she enters — mediocrity is simply not an option.' },
  { icon: Heart, label: 'Authenticity', desc: 'Every service, every note, every dish is an honest expression of who she is.' },
  { icon: MapPin, label: 'Pride of Origin', desc: 'Deeply rooted in Nigerian culture while building to international standards.' },
  { icon: Star, label: 'Resilience', desc: 'Overcoming barriers with grace, converting every challenge into a stepping stone.' },
]

export default function About() {
  return (
    <motion.div {...pageTransition}>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose/[0.07] blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold/[0.05] blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-px bg-gradient-to-r from-rose to-transparent" />
                <span className="font-mono text-xs tracking-widest uppercase text-rose">About</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="block font-script text-3xl text-rose/60 mb-1"
              >
                Okorie
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-off-white leading-tight mb-6"
              >
                Angela{' '}
                <span className="text-gradient-rose italic block">Chiamaka</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="font-display text-xl italic text-gold/70 mb-8"
              >
                Trader, Customer Expert Representative. Entrepreneur.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-body text-muted leading-relaxed"
              >
                B.Sc. Soil Science, Abia State University · Lagos, Nigeria · Multi-industry professional
                with expertise spanning global financial markets, music artistry, culinary arts, beauty,
                customer experience, and entrepreneurship.
              </motion.p>

              {/* Circle portrait — mobile only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex justify-center mt-10 lg:hidden"
              >
                <div className="relative">
                  {/* Outer glow */}
                  <div className="absolute -inset-4 rounded-full bg-rose/[0.12] blur-2xl pointer-events-none" />
                  {/* Gradient border ring */}
                  <div
                    className="absolute -inset-1.5 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #D4849A, #C9A84C, #D4849A)',
                      padding: '3px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  {/* Circle image */}
                  <div className="w-52 h-52 rounded-full overflow-hidden relative z-10 border-4 border-bg">
                    <img
                      src={circleImg}
                      alt="Okorie Angela Chiamaka"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-4 py-1.5 whitespace-nowrap shadow-lg z-20"
                  >
                    <span className="font-script text-base text-gradient-rose">Lagos, Nigeria</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-rose/[0.08] rounded-3xl blur-3xl scale-90" />
              <img
                src={redDressImg}
                alt="Okorie Angela Chiamaka"
                className="relative z-10 w-full h-[580px] object-cover object-top rounded-3xl shadow-[0_30px_80px_rgba(212,132,154,0.2)]"
              />
              <div className="absolute -inset-2 rounded-3xl border border-rose/15 pointer-events-none z-20" />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </section>

      {/* FULL BIO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel>Biography</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl font-light text-off-white mb-8"
            >
              The Full Story
            </motion.h2>
            {[
              `Okorie Angela Chiamaka was born and raised in Nigeria, shaped by the resilience, creativity, and entrepreneurial spirit that defines the Nigerian character at its finest. From an early age, she demonstrated an exceptional ability to immerse herself fully in whatever she chose to pursue — whether that was academics, music, or the art of caring for people.`,
              `After completing her Bachelor of Science in Soil Science at Abia State University in 2017, Angela took an unconventional path — one that would see her develop mastery not in one field, but across six distinct professional domains. She began her career in customer service, quickly building a reputation for empathy, efficiency, and excellence that took her through companies across fintech, e-commerce, and international BPO operations.`,
              `In 2022, she entered the world of Forex and commodities trading — obtaining certifications from the London Academy of Trading and GARP (FRM Part I), and going on to trade successfully with multiple prop firms including FTMO, FundedNext, Audacity Capital, and The5ers. She brought the same analytical discipline she applied to markets to her role as an independent market analyst for Forexbrokers.ng and Traderoom Africa.`,
              `Alongside her trading career, Angela has nurtured a deep passion for music. As a singer and songwriter rooted in Afrobeats, R&B, and Gospel, she performs with an emotional authenticity that connects with audiences on a profound level. Her culinary artistry — honed through years of crafting authentic Nigerian and continental dishes — has grown into a full service offering for private dining and events.`,
              `As a hair stylist, she brings the same attention to detail and creative vision to her clients' crowns as she does to everything else she touches. And as an entrepreneur, she is weaving all of these pillars into a cohesive personal brand that speaks to the power of a multi-dimensional African woman on the world stage.`,
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
            <div className="space-y-4 mb-10">
              {[
                { icon: Phone, text: '+234 813 820 4756', href: 'tel:+2348138204756' },
                { icon: Phone, text: '+234 808 313 5808', href: 'tel:+2348083135808' },
                { icon: Mail, text: 'angieokorie@gmail.com', href: 'mailto:angieokorie@gmail.com' },
                { icon: MapPin, text: 'Lagos, Nigeria 100001', href: '#' },
              ].map(({ icon: Icon, text, href }, i) => (
                <motion.a
                  key={text}
                  href={href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-rose/30 transition-all duration-300 group"
                >
                  <Icon size={14} className="text-rose/50 group-hover:text-rose flex-shrink-0 transition-colors" />
                  <span className="font-body text-sm text-muted group-hover:text-off-white transition-colors">
                    {text}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Personal Values</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
          >
            What She Stands For
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={val.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-rose/30 hover:shadow-[0_0_30px_rgba(212,132,154,0.08)] transition-all duration-300 group"
              >
                <val.icon size={20} className="text-rose mb-4" />
                <h3 className="font-display text-xl font-medium text-off-white mb-2">{val.label}</h3>
                <p className="font-body text-xs text-muted leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Career Journey</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          Milestones
        </motion.h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          {careerTimeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-10 pb-8 last:pb-0 group"
            >
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-rose bg-bg group-hover:bg-rose transition-colors duration-300" />
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <span className="font-mono text-xs tracking-widest text-rose border border-rose/30 rounded-full px-3 py-1 whitespace-nowrap self-start">
                  {item.year}
                </span>
                <p className="font-body text-sm text-muted leading-relaxed pt-0.5">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Education</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
          >
            Academic Background
          </motion.h2>
          <div className="space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 bg-card border border-border rounded-2xl p-7 hover:border-rose/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 border border-border rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-rose/30 transition-colors">
                  <GraduationCap size={22} className="text-rose" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-off-white">{edu.degree}</h3>
                  <p className="font-mono text-xs text-muted mt-1">{edu.institution}</p>
                  {edu.year && (
                    <span className="font-mono text-xs text-rose border border-rose/30 rounded-full px-2 py-0.5 mt-2 inline-block">{edu.year}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
