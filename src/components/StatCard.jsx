import { motion } from 'framer-motion'

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border p-6 text-center group hover:border-gold/40 transition-all duration-300"
    >
      <div className="font-display text-4xl md:text-5xl font-light text-gradient-gold mb-2">
        {value}
      </div>
      <div className="font-mono text-xs tracking-widest uppercase text-muted group-hover:text-gold/70 transition-colors">
        {label}
      </div>
    </motion.div>
  )
}
