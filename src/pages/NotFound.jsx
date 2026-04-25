import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

export default function NotFound() {
  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#C9A84C08_0%,transparent_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #F0EDE8 1px, transparent 1px), linear-gradient(to bottom, #F0EDE8 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="text-center px-6 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="font-display text-[10rem] md:text-[14rem] font-light leading-none text-gradient-gold opacity-30 mb-0 select-none"
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="-mt-8 relative z-10"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px bg-gold" />
            <span className="font-mono text-xs tracking-widest uppercase text-gold">Page Not Found</span>
            <div className="w-10 h-px bg-gold" />
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-light text-off-white mb-4">
            This Page Doesn't Exist
          </h1>

          <p className="font-body text-muted mb-10 leading-relaxed">
            The page you're looking for may have moved or never existed.
            Let's get you back to Angela's world.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-gold text-bg font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
            >
              <Home size={14} /> Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-border text-muted font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ArrowLeft size={14} /> Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
