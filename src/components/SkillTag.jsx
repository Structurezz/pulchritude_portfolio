import { motion } from 'framer-motion'

export default function SkillTag({ children, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -2 }}
      className="inline-block bg-card border border-border rounded-full text-off-white/80 font-mono text-[11px] tracking-widest uppercase px-4 py-2 transition-all duration-200 cursor-default hover:border-rose/50 hover:text-rose hover:shadow-[0_8px_20px_-8px_rgba(99,102,241,0.4)]"
    >
      {children}
    </motion.span>
  )
}
