import { motion } from 'framer-motion'

export default function HeroSection({
  label,
  title,
  subtitle,
  description,
  accentColor = '#818CF8',
  accentClass = '',
  children,
}) {
  return (
    <section className="relative min-h-[65vh] md:min-h-[85vh] flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 65% 25%, ${accentColor}20 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 15% 75%, rgba(52,211,153,0.10) 0%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div
          className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-30 blur-3xl animate-[float_10s_ease-in-out_infinite]"
          style={{ background: accentColor }}
        />
        <div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]"
          style={{ background: '#34D399' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 py-12 md:py-20 w-full relative z-10">
        <div className="max-w-4xl">
          {label && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-rose/30 bg-rose/[0.08]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-rose">
                {label}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[2.6rem] md:text-6xl lg:text-7xl font-semibold text-off-white leading-[1.05] mb-5 md:mb-6 tracking-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={`font-display text-lg md:text-2xl font-medium mb-5 md:mb-8 ${accentClass || 'text-gold'}`}
            >
              {subtitle}
            </motion.p>
          )}

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-sm md:text-lg text-muted leading-relaxed max-w-2xl mb-8 md:mb-10"
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

      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  )
}
