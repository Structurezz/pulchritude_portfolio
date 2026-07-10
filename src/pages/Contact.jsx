import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const Instagram = ({ size = 17 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const Linkedin = ({ size = 17 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const subjects = [
  'Customer Service Enquiry',
  'Lead Generation Campaign',
  'Consulting / Freelance',
  'Full-Time Role',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`
    )
    window.location.href = `mailto:angieokorie@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Enquiry')}&body=${body}`
    setSent(true)
  }

  return (
    <motion.div {...pageTransition}>
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose/15 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-20 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-rose/30 bg-rose/[0.08]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-rose">Contact · Available Now</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-off-white leading-[1.02] mb-6 tracking-tight"
          >
            Let's start a <br />
            <span className="text-gradient-modern italic">conversation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-muted max-w-2xl text-base md:text-lg leading-relaxed"
          >
            Whether you need better customer support or a warmer sales pipeline — I'm ready to help. Reach out and I'll respond within 24 hours.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* FORM */}
          <div className="lg:col-span-3">
            <SectionLabel>Send a Message</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl font-semibold text-off-white mb-10 tracking-tight"
            >
              Get in touch
            </motion.h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-emerald-500/40 rounded-3xl p-10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center mx-auto mb-5">
                  <Send size={24} className="text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-off-white mb-3">Message sent!</h3>
                <p className="font-body text-sm text-muted">
                  Your email client has been opened. I'll respond as soon as possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 font-mono text-xs tracking-widest uppercase text-rose border-b border-rose/40 pb-1 hover:border-rose transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-[10px] tracking-widest uppercase text-muted block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 font-body text-sm text-off-white placeholder:text-muted/50 focus:outline-none focus:border-rose/60 focus:ring-4 focus:ring-rose/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-widest uppercase text-muted block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 font-body text-sm text-off-white placeholder:text-muted/50 focus:outline-none focus:border-rose/60 focus:ring-4 focus:ring-rose/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted block mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 font-body text-sm text-off-white focus:outline-none focus:border-rose/60 focus:ring-4 focus:ring-rose/10 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-card">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me how I can help..."
                    className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 font-body text-sm text-off-white placeholder:text-muted/50 focus:outline-none focus:border-rose/60 focus:ring-4 focus:ring-rose/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose to-rose-dark text-white font-body text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-rose/40 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  <Send size={16} /> Send Message
                </button>
              </motion.form>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-2 space-y-4">
            <SectionLabel>Contact Details</SectionLabel>

            {[
              { icon: Phone, label: 'Primary Phone', value: '+234 813 820 4756', href: 'tel:+2348138204756' },
              { icon: Phone, label: 'Secondary Phone', value: '+234 808 313 5808', href: 'tel:+2348083135808' },
              { icon: Mail, label: 'Email Address', value: 'angieokorie@gmail.com', href: 'mailto:angieokorie@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: '#' },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={value}
                href={href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-rose/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose/20 to-gold/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-rose" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-0.5">{label}</p>
                  <p className="font-body text-sm text-off-white group-hover:text-rose transition-colors">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/2348138204756?text=Hello+Angela%2C+I+found+your+portfolio+and+would+like+to+connect."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-3 px-6 py-4 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/25 hover:border-emerald-500/60 transition-all duration-300 w-full rounded-2xl"
            >
              <MessageCircle size={18} />
              <span className="font-mono text-[11px] tracking-widest uppercase font-semibold">Chat on WhatsApp</span>
            </motion.a>

            {/* Social */}
            <div className="pt-4">
              <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-4">Follow on Social</p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                  { icon: Instagram, label: 'Instagram', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-rose hover:border-rose/60 transition-all duration-300"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
