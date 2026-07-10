import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

export default function TimelineItem({ role, company, period, description, index = 0, id }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 pb-10 last:pb-0 group scroll-mt-24"
    >
      {/* Vertical gradient line */}
      <div className="absolute left-[7px] top-4 bottom-0 w-px bg-gradient-to-b from-rose/60 via-border to-transparent group-last:from-rose/60 group-last:via-border/40" />
      {/* Dot with ring */}
      <div className="absolute left-0 top-3">
        <div className="w-4 h-4 rounded-full border-2 border-rose bg-bg group-hover:bg-rose transition-colors duration-300 relative">
          <div className="absolute inset-0 rounded-full border border-rose/40 pulse-ring" />
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-7 hover:border-rose/40 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.25)] hover:-translate-y-0.5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <Building2 size={13} className="text-rose/70" />
              <p className="font-mono text-[11px] tracking-widest uppercase text-rose">{company}</p>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-off-white leading-tight">{role}</h3>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-muted whitespace-nowrap border border-border rounded-full px-3 py-1 self-start bg-surface">
            {period}
          </span>
        </div>
        {description && (
          <p className="font-body text-sm text-muted leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  )
}
