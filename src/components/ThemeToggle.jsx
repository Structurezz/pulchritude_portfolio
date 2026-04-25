import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-7 rounded-full focus:outline-none flex-shrink-0"
      style={{ padding: 0 }}
    >
      {/* Track */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? 'linear-gradient(135deg, #321740, #1D1226)'
            : 'linear-gradient(135deg, #F5C6D0, #E8D0DA)',
          boxShadow: isDark
            ? '0 0 12px rgba(212,132,154,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
            : '0 0 12px rgba(201,107,133,0.3), inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Border ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #D4849A, #C9A84C)'
            : 'linear-gradient(135deg, #C96B85, #B8922A)',
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Stars — visible in dark mode */}
      <AnimatePresence>
        {isDark && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-hidden rounded-full pointer-events-none"
          >
            {[
              { top: '25%', left: '20%', size: 1.5, delay: 0 },
              { top: '60%', left: '35%', size: 1,   delay: 0.4 },
              { top: '30%', left: '55%', size: 1.5, delay: 0.8 },
            ].map((star, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thumb (sliding circle) */}
      <motion.div
        className="absolute top-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md z-10"
        animate={{
          left: isDark ? 'calc(100% - 1.5rem)' : '0.25rem',
          background: isDark
            ? 'linear-gradient(135deg, #D4849A, #C9A84C)'
            : 'linear-gradient(135deg, #C96B85, #B8922A)',
          boxShadow: isDark
            ? '0 2px 8px rgba(212,132,154,0.6)'
            : '0 2px 8px rgba(201,107,133,0.5)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={10} className="text-white" strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={10} className="text-white" strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}
