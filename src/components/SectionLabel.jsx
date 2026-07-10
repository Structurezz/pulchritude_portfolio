import { motion } from 'framer-motion'

export default function SectionLabel({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-rose/30 bg-rose/[0.06] ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-rose">
        {children}
      </span>
    </motion.div>
  )
}
