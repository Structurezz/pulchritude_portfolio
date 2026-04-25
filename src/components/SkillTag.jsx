import { motion } from 'framer-motion'

export default function SkillTag({ children, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ borderColor: '#C9A84C', color: '#C9A84C' }}
      className="inline-block border border-border text-muted font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200 cursor-default"
    >
      {children}
    </motion.span>
  )
}
