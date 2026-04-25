import { motion } from 'framer-motion'

export default function TimelineItem({ role, company, period, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0 group"
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:bg-transparent" />
      {/* Dot */}
      <div className="absolute left-[-5px] top-[7px] w-2.5 h-2.5 rounded-full border-2 border-gold bg-bg group-hover:bg-gold transition-colors duration-300" />

      <div className="bg-card border border-border p-6 hover:border-gold/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-display text-xl font-medium text-off-white">{role}</h3>
            <p className="font-mono text-xs tracking-wider text-gold mt-1">{company}</p>
          </div>
          <span className="font-mono text-xs tracking-widest text-muted whitespace-nowrap border border-border px-3 py-1 self-start">
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
