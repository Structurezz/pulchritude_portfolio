import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function PortfolioCard({ to, icon: Icon, title, description, accent, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link
        to={to}
        className="block h-full bg-card border border-border rounded-2xl p-8 relative overflow-hidden transition-all duration-400 hover:border-rose/30 hover:shadow-[0_20px_60px_rgba(212,132,154,0.12)]"
      >
        {/* Accent glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 50% 0%, ${accent}18 0%, transparent 70%)`,
          }}
        />

        {/* Soft corner bloom */}
        <div
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"
          style={{ background: accent }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className="w-12 h-12 flex items-center justify-center border border-border rounded-xl mb-6 group-hover:border-rose/30 transition-colors duration-300"
            style={{ color: accent }}
          >
            <Icon size={22} />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-medium text-off-white mb-3 group-hover:text-rose transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-muted leading-relaxed mb-6">
            {description}
          </p>

          {/* Arrow */}
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-rose/50 group-hover:text-rose transition-colors duration-300">
            <span>Explore</span>
            <ArrowUpRight
              size={14}
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
