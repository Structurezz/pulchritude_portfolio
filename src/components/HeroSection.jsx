import { motion } from 'framer-motion'

export default function HeroSection({
  label,
  title,
  subtitle,
  description,
  accentColor = '#D4849A',
  accentClass = '',
  children,
}) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
      {/* Soft organic background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 65% 35%, ${accentColor}14 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 15% 75%, #C9A84C09 0%, transparent 60%)`,
          }}
        />
        {/* Floating blobs */}
        <div
          className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-[0.06] blur-3xl animate-[float_8s_ease-in-out_infinite]"
          style={{ background: accentColor }}
        />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-[0.04] blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]"
          style={{ background: '#C9A84C' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full relative z-10">
        <div className="max-w-4xl">
          {label && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-gradient-to-r from-rose to-transparent" />
              <span className="font-mono text-xs tracking-widest uppercase text-rose">
                {label}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-rose/50" />
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-off-white leading-[1.05] mb-6"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={`font-display text-xl md:text-2xl font-light italic mb-8 ${accentClass || 'text-rose'}`}
            >
              {subtitle}
            </motion.p>
          )}

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-10"
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  )
}
