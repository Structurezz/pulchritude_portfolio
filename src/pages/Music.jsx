import { motion } from 'framer-motion'
import { Music as MusicIcon, Mic2, Play, Calendar, Mail } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionLabel from '../components/SectionLabel'
import artistImg from '../assets/image4.jpeg'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const genres = ['Afrobeats', 'R&B', 'Gospel', 'Soul', 'Afro-Pop']

const works = [
  { title: 'Coming Soon', type: 'Single', year: '2025', status: 'Upcoming' },
  { title: 'Coming Soon', type: 'EP', year: '2025', status: 'In Studio' },
  { title: 'Coming Soon', type: 'Single', year: '2024', status: 'Released' },
  { title: 'Coming Soon', type: 'Collaboration', year: '2024', status: 'Released' },
]

const events = [
  { title: 'Live Performance', venue: 'Lagos Music Showcase', date: '2024' },
  { title: 'Church Performance', venue: 'Gospel Concert, Lagos', date: '2024' },
  { title: 'Open Mic Night', venue: 'The Spot, Lagos Island', date: '2023' },
]

export default function Music() {
  return (
    <motion.div {...pageTransition}>
      <HeroSection
        label="Music"
        title={
          <>
            Soulful{' '}
            <span className="italic" style={{ color: '#A855F7' }}>Expressions</span>
          </>
        }
        subtitle="Singer — Songwriter — Performing Artist"
        description="Music is the language Angela speaks most freely — a sonic world where Afrobeats energy meets R&B depth and Gospel conviction. Every note is lived experience, transformed into art."
        accentColor="#A855F7"
      />

      {/* BIO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Artist Bio</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-light text-off-white mb-6"
            >
              The Voice Behind the Vision
            </motion.h2>
            {[
              `Okorie Angela Chiamaka discovered her voice long before she ever stepped into a financial market or a professional kitchen. Music has been her constant — a space of pure authenticity where she pours her stories, her faith, and her culture.`,
              `Rooted in the rich musical tapestry of Nigeria, her sound draws from the vibrant energy of Afrobeats, the emotional depth of R&B, and the spiritual power of Gospel.`,
              `With original recordings in progress and live performance experience across Lagos, Angela is building a musical catalogue that tells the full story of a woman who lives fearlessly across multiple worlds.`,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="font-body text-muted leading-relaxed mb-4"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Circle frame photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-purple-500/10 blur-2xl" />
              {/* Gradient border ring */}
              <div
                className="absolute -inset-1.5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #A855F7, #D4849A, #C9A84C, #A855F7)',
                  padding: '3px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              {/* Circle image */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden relative -mt-29 z-10 border-4 border-bg">
                <img
                  src={artistImg}
                  alt="Angela — Music Artist"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating script label */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-5 py-2 whitespace-nowrap shadow-lg z-20"
              >
                <span className="font-script text-xl text-gradient-rose">Singer & Songwriter</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GENRES */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <SectionLabel>Sound & Style</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-light text-off-white mb-8"
          >
            Genre & Influences
          </motion.h2>
          <div className="flex flex-wrap gap-4">
            {genres.map((g, i) => (
              <motion.span
                key={g}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="font-display text-2xl md:text-3xl italic font-light px-6 py-3 border border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-purple-200 transition-all duration-300 cursor-default"
              >
                {g}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOGRAPHY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Discography</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          Works & Releases
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border group hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
            >
              <div className="relative bg-surface aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src={`https://placehold.co/300x300/141B26/A855F7?text=${encodeURIComponent(work.type)}`}
                  alt={work.type}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center">
                    <Play size={20} className="text-bg ml-1" />
                  </div>
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-medium text-off-white mb-1">{work.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">{work.type} · {work.year}</span>
                  <span
                    className={`font-mono text-xs px-2 py-1 ${
                      work.status === 'Upcoming'
                        ? 'text-gold border border-gold/30'
                        : work.status === 'In Studio'
                        ? 'text-purple-400 border border-purple-500/30'
                        : 'text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {work.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MUSIC PLAYER PLACEHOLDER */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <SectionLabel>Listen</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-light text-off-white mb-8"
          >
            Stream Music
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border p-10 text-center flex flex-col items-center gap-5"
          >
            <div className="w-20 h-20 border border-border flex items-center justify-center">
              <MusicIcon size={32} className="text-gold/50" />
            </div>
            <p className="font-display text-xl text-muted italic">
              Music streaming links coming soon
            </p>
            <p className="font-mono text-xs text-muted/60 tracking-widest uppercase">
              Spotify · Apple Music · SoundCloud · Boomplay
            </p>
          </motion.div>
        </div>
      </section>

      {/* PERFORMANCES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Performances</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-light text-off-white mb-12"
        >
          Live Events
        </motion.h2>
        <div className="space-y-4">
          {events.map((evt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-6 bg-card border border-border p-6 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/40">
                <Calendar size={16} className="text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-medium text-off-white">{evt.title}</h3>
                <p className="font-mono text-xs text-muted">{evt.venue}</p>
              </div>
              <span className="font-mono text-xs text-muted border border-border px-3 py-1">{evt.date}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mic2 size={32} className="text-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-off-white mb-4">
              Book Angela to Perform
            </h2>
            <p className="font-body text-muted max-w-lg mx-auto mb-10">
              Available for live performances, events, church concerts, and collaborations.
              Reach out to discuss your event needs.
            </p>
            <a
              href="mailto:angieokorie@gmail.com?subject=Music Booking Enquiry"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-bg font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
            >
              <Mail size={14} /> Book a Performance
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
