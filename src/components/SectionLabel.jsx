import { motion } from 'framer-motion'

export default function SectionLabel({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4 mb-4 ${className}`}
    >
      <div className="w-10 h-px bg-gradient-to-r from-rose to-transparent" />
      <span className="font-mono text-xs tracking-widest uppercase text-rose">
        {children}
      </span>
      <div className="w-1 h-1 rounded-full bg-rose/50" />
    </motion.div>
  )
}
