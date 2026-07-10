import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function PortfolioCard({ to, icon: Icon, title, description, accent, index = 0, badge }) {
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
        className="block h-full bg-card border border-border rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:border-rose/40 hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)]"
      >
        {/* Gradient corner glow */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-40 pointer-events-none"
          style={{ background: accent }}
        />

        {/* Subtle border gradient on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${accent}22, transparent 40%)`,
          }}
        />

        <div className="relative z-10">
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose/10 border border-rose/30 mb-5 font-mono text-[9px] tracking-widest uppercase text-rose">
              <span className="w-1 h-1 rounded-full bg-rose animate-pulse" />
              {badge}
            </span>
          )}

          {/* Icon */}
          <div
            className="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 relative"
            style={{
              background: `linear-gradient(135deg, ${accent}25, ${accent}10)`,
              boxShadow: `0 10px 30px -10px ${accent}66`,
            }}
          >
            <Icon size={26} style={{ color: accent }} strokeWidth={1.8} />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-off-white mb-3 group-hover:text-rose transition-colors duration-300 tracking-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-muted leading-relaxed mb-8">
            {description}
          </p>

          {/* Arrow */}
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-rose/70 group-hover:text-rose transition-colors duration-300">
            <span>Explore</span>
            <div className="w-8 h-8 rounded-full border border-rose/30 group-hover:border-rose group-hover:bg-rose flex items-center justify-center transition-all duration-300">
              <ArrowUpRight
                size={14}
                className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
