import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, AtSign, Share2, Globe, MessageCircle } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const subjects = [
  'Trading Enquiry',
  'Customer Service',
  'Music Booking',
  'Hair Appointment',
  'Catering / Culinary',
  'Business / Consulting',
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
      <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,#C9A84C0D_0%,transparent_65%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #F0EDE8 1px, transparent 1px), linear-gradient(to bottom, #F0EDE8 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gold" />
            <span className="font-mono text-xs tracking-widest uppercase text-gold">Contact</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-light text-off-white leading-tight mb-6"
          >
            Let's Start a{' '}
            <span className="text-gradient-gold italic">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-muted max-w-2xl text-lg leading-relaxed"
          >
            Whether you're enquiring about trading, booking a performance, planning an event, or
            exploring a business opportunity — Angela is ready to connect.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* FORM */}
          <div className="lg:col-span-3">
            <SectionLabel>Send a Message</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl font-light text-off-white mb-10"
            >
              Get In Touch
            </motion.h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-gold/40 p-10 text-center"
              >
                <div className="w-16 h-16 border border-gold/40 flex items-center justify-center mx-auto mb-5">
                  <Send size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl text-off-white mb-3">Message Sent!</h3>
                <p className="font-body text-sm text-muted">
                  Your email client has been opened. Angela will respond as soon as possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 font-mono text-xs tracking-widest uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
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
                    <label className="font-mono text-xs tracking-widest uppercase text-muted block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-off-white placeholder:text-muted/50 focus:outline-none focus:border-gold/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-widest uppercase text-muted block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-off-white placeholder:text-muted/50 focus:outline-none focus:border-gold/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest uppercase text-muted block mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-off-white focus:outline-none focus:border-gold/60 transition-colors appearance-none cursor-pointer"
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
                  <label className="font-mono text-xs tracking-widest uppercase text-muted block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell Angela how she can help you..."
                    className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-off-white placeholder:text-muted/50 focus:outline-none focus:border-gold/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-bg font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] w-full sm:w-auto justify-center"
                >
                  <Send size={14} /> Send Message
                </button>
              </motion.form>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-2 space-y-6">
            <SectionLabel>Contact Details</SectionLabel>

            {/* Contact Cards */}
            {[
              { icon: Phone, label: 'Primary Phone', value: '+234 813 820 4756', href: 'tel:+2348138204756' },
              { icon: Phone, label: 'Secondary Phone', value: '+234 808 313 5808', href: 'tel:+2348083135808' },
              { icon: Mail, label: 'Email Address', value: 'angieokorie@gmail.com', href: 'mailto:angieokorie@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria 100001', href: '#' },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={value}
                href={href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-5 bg-card border border-border p-5 hover:border-gold/40 transition-all duration-300 group block"
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors">
                  <Icon size={16} className="text-gold/60 group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-muted mb-0.5">{label}</p>
                  <p className="font-body text-sm text-off-white group-hover:text-gold transition-colors">{value}</p>
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
              className="flex items-center gap-3 px-6 py-4 bg-emerald-600/20 border border-emerald-600/30 text-emerald-400 hover:bg-emerald-600/30 hover:border-emerald-500/50 transition-all duration-300 w-full"
            >
              <MessageCircle size={18} />
              <span className="font-mono text-xs tracking-widest uppercase">Chat on WhatsApp</span>
            </motion.a>

            {/* Social */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">Follow on Social</p>
              <div className="flex gap-3">
                {[
                  { icon: AtSign, label: 'Instagram', href: '#' },
                  { icon: Share2, label: 'Twitter / X', href: '#' },
                  { icon: Globe, label: 'LinkedIn', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-all duration-300"
                  >
                    <Icon size={16} />
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
