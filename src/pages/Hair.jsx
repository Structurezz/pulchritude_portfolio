import { motion } from 'framer-motion'
import { Scissors, Star, Clock, MessageCircle, Sparkles, Palette } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionLabel from '../components/SectionLabel'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const hairSpecialties = [
  'Natural Hair Care', 'Box Braids', 'Knotless Braids', 'Cornrows',
  'Loc Maintenance', 'Faux Locs', 'Weave Installation', 'Wig Styling',
  'Twists & Twistouts', 'Protective Styles',
]

const makeupSpecialties = [
  'Bridal Makeup', 'Glam / Editorial', 'Natural / No-Makeup Makeup',
  'Aso-ebi & Event Glam', 'Contouring & Sculpting', 'Eye Artistry',
  'Airbrush Makeup', 'Skincare Prep & Priming',
]

const hairServices = [
  { name: 'Box Braids (Medium)',        duration: '4–5 hrs',   price: '₦25,000 – ₦40,000' },
  { name: 'Knotless Braids',            duration: '5–6 hrs',   price: '₦35,000 – ₦55,000' },
  { name: 'Faux Locs',                  duration: '5–7 hrs',   price: '₦40,000 – ₦65,000' },
  { name: 'Cornrows (Full Head)',        duration: '2–3 hrs',   price: '₦8,000 – ₦18,000'  },
  { name: 'Wig Styling & Customisation',duration: '1–2 hrs',   price: '₦12,000 – ₦25,000' },
  { name: 'Weave Installation',         duration: '2–4 hrs',   price: '₦20,000 – ₦40,000' },
  { name: 'Natural Hair Treatment',     duration: '1.5–2 hrs', price: '₦10,000 – ₦20,000' },
  { name: 'Loc Retouch & Maintenance',  duration: '2–4 hrs',   price: '₦15,000 – ₦30,000' },
]

const makeupServices = [
  { name: 'Bridal Makeup (Full)',        duration: '2–3 hrs',   price: '₦45,000 – ₦80,000' },
  { name: 'Event / Aso-ebi Glam',       duration: '1–2 hrs',   price: '₦20,000 – ₦40,000' },
  { name: 'Editorial / Photoshoot',     duration: '1.5–2 hrs', price: '₦35,000 – ₦60,000' },
  { name: 'Natural / Everyday Look',    duration: '45–60 min', price: '₦12,000 – ₦22,000' },
  { name: 'Contouring & Glam',          duration: '1–1.5 hrs', price: '₦25,000 – ₦45,000' },
  { name: 'Makeup Lesson (1-on-1)',     duration: '2 hrs',     price: '₦30,000 / session'  },
]

const gallery = [
  { label: 'Box Braids',      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbBM15VFYIk9m5_eGH6RbmQwu3d5L9FySRA&s' },
  { label: 'Knotless Braids', img: 'https://frohub.com/wp-content/uploads/2024/07/IMG_1130.jpg' },
  { label: 'Natural Twists',  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq82R6ECT-mlydCihdywt4FuT-fZF1IHnDnA&s' },
  { label: 'Cornrows',        img: 'https://media.glamourmagazine.co.uk/photos/6509c541f1bb1fe807521312/16:9/w_1280,c_limit/CORNROWS%20190923%20dfault-GettyImages-992659140.jpg' },
  { label: 'Wig Glam',        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVMAVRKWea6t7zrvaEX_Fho11lmp-cMiXIEqnC4w5fOBGMOcsAGlnEWk2_SQ6YZ6KzZrOkF-p-JLhS2hxExVg4d0J5ddZb2h0f4dzuscdT88sJApim61VM&usqp=CAc' },

]

// Curated makeup look images from Unsplash
const makeupGallery = [
  { label: 'Bridal Glam',      img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80&auto=format&fit=crop' },
  { label: 'Smoky Eye',        img: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=500&q=80&auto=format&fit=crop' },
  { label: 'Soft Glam',        img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80&auto=format&fit=crop' },
  { label: 'Bold Lip',         img: 'https://images.unsplash.com/photo-1512207846876-bb54ef5056fe?w=500&q=80&auto=format&fit=crop' },
  { label: 'Natural Look',     img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&q=80&auto=format&fit=crop' },
  { label: 'Event Glam',       img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80&auto=format&fit=crop' },
]

export default function Hair() {
  const waNumber = '2348138204756'
  const waHairMsg   = encodeURIComponent('Hello Angela, I would like to book a hair appointment.')
  const waMakeupMsg = encodeURIComponent('Hello Angela, I would like to book a makeup appointment.')

  return (
    <motion.div {...pageTransition}>
      <HeroSection
        label="Hair & Makeup"
        title={
          <>
            Beauty is{' '}
            <span className="italic" style={{ color: '#F43F5E' }}>Her Art</span>
          </>
        }
        subtitle="Hair Stylist · Makeup Artist · Beauty Professional"
        description="From crown to face — Angela transforms her clients with expert hair styling and flawless makeup artistry, honouring each individual's unique beauty."
        accentColor="#F43F5E"
      />

      {/* ── TAB DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="flex gap-px rounded-2xl overflow-hidden border border-border">
          <div className="flex-1 bg-card px-8 py-5 flex items-center gap-3">
            <Scissors size={16} className="text-rose" />
            <span className="font-display text-lg font-medium text-off-white">Hair Styling</span>
          </div>
          <div className="w-px bg-border" />
          <div className="flex-1 bg-card px-8 py-5 flex items-center gap-3">
            <Sparkles size={16} className="text-rose" />
            <span className="font-display text-lg font-medium text-off-white">Makeup Artistry</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          HAIR SECTION
      ══════════════════════════════════════ */}

      {/* HAIR SPECIALTIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionLabel>Hair Specialties</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-10"
        >
          Hair Expertise
        </motion.h2>
        <div className="flex flex-wrap gap-3">
          {hairSpecialties.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 border border-border rounded-full text-muted hover:border-rose/50 hover:text-rose transition-all duration-300 cursor-default"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* HAIR GALLERY */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Hair Portfolio</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
          >
            Style Gallery
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden border border-border rounded-2xl hover:border-rose/40 hover:shadow-[0_0_30px_rgba(212,132,154,0.1)] transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent flex items-end p-4 rounded-2xl">
                  <span className="font-body text-xs text-off-white">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HAIR SERVICES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Hair Services & Pricing</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          Hair Menu
        </motion.h2>
        <div className="space-y-3">
          {hairServices.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center justify-between gap-4 bg-card border border-border rounded-xl px-6 py-5 hover:border-rose/40 hover:shadow-[0_0_20px_rgba(212,132,154,0.06)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <Scissors size={14} className="text-rose/50 group-hover:text-rose flex-shrink-0 transition-colors" />
                <div>
                  <span className="font-body text-sm text-off-white group-hover:text-rose-light transition-colors">
                    {svc.name}
                  </span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock size={11} className="text-muted" />
                    <span className="font-mono text-xs text-muted">{svc.duration}</span>
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs text-gold whitespace-nowrap">{svc.price}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-mono text-xs text-muted mt-6 text-center tracking-wider"
        >
          * Prices vary based on hair length, thickness, and style complexity. Hair extensions not included.
        </motion.p>
      </section>

      {/* ══════════════════════════════════════
          MAKEUP ARTISTRY SECTION
      ══════════════════════════════════════ */}

      {/* DIVIDER */}
      <div className="relative">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
        <div className="flex justify-center -mt-4">
          <span className="bg-bg px-6 inline-flex items-center gap-2">
            <Sparkles size={14} className="text-rose" />
            <span className="font-script text-2xl text-gradient-rose">Makeup Artistry</span>
            <Sparkles size={14} className="text-rose" />
          </span>
        </div>
      </div>

      {/* MAKEUP INTRO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Makeup Artistry</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-light text-off-white mb-6 leading-tight"
            >
              Faces That{' '}
              <span className="text-gradient-rose italic">Tell a Story</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-muted leading-relaxed mb-5"
            >
              Angela's makeup artistry goes beyond product and technique — it's about understanding
              bone structure, skin tone, and the emotion a client wants to carry into their special moment.
              Whether it's a minimalist glow or a full editorial beat, every face receives the same
              devotion and precision.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="font-body text-muted leading-relaxed"
            >
              Specialising in melanin-rich skin, she works with premium products that flatter
              deeper complexions — delivering looks that photograph beautifully and last all day.
            </motion.p>
          </div>

          {/* Makeup specialties grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            {makeupSpecialties.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3 hover:border-rose/40 transition-all duration-300 group"
              >
                <Palette size={13} className="text-rose/60 group-hover:text-rose flex-shrink-0 transition-colors" />
                <span className="font-body text-xs text-muted group-hover:text-off-white transition-colors leading-snug">
                  {s}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MAKEUP GALLERY */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Makeup Portfolio</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
          >
            Beat Gallery
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {makeupGallery.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden border border-border rounded-2xl hover:border-rose/40 hover:shadow-[0_0_40px_rgba(212,132,154,0.15)] transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent flex items-end p-5 rounded-2xl">
                  <div>
                    <span className="font-display text-base font-medium text-off-white block">{item.label}</span>
                    <span className="font-mono text-xs text-rose/70">Makeup Artistry</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAKEUP SERVICES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Makeup Services & Pricing</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          Makeup Menu
        </motion.h2>
        <div className="space-y-3">
          {makeupServices.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-between gap-4 bg-card border border-border rounded-xl px-6 py-5 hover:border-rose/40 hover:shadow-[0_0_20px_rgba(212,132,154,0.08)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <Sparkles size={13} className="text-rose/50 group-hover:text-rose flex-shrink-0 transition-colors" />
                <div>
                  <span className="font-body text-sm text-off-white group-hover:text-rose-light transition-colors">
                    {svc.name}
                  </span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock size={11} className="text-muted" />
                    <span className="font-mono text-xs text-muted">{svc.duration}</span>
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs text-gold whitespace-nowrap">{svc.price}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-mono text-xs text-muted mt-6 text-center tracking-wider"
        >
          * Bridal packages available. Trial sessions recommended 2–4 weeks before the event.
        </motion.p>
      </section>

      {/* ══════════════════════════════════════
          BOOKING CTA — Hair & Makeup
      ══════════════════════════════════════ */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Hair booking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-rose/[0.06] blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 border border-border rounded-xl flex items-center justify-center mb-5">
                  <Scissors size={20} className="text-rose" />
                </div>
                <SectionLabel>Book Hair</SectionLabel>
                <h3 className="font-display text-2xl font-light text-off-white mb-3">
                  Ready for Your Glow-Up?
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-6">
                  Premium, personalised hair styling across Lagos. Quick WhatsApp booking available.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${waNumber}?text=${waHairMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-rose text-white font-body text-xs tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose-light hover:shadow-[0_0_20px_rgba(212,132,154,0.4)]"
                  >
                    <MessageCircle size={13} /> WhatsApp
                  </a>
                  <a
                    href="mailto:angieokorie@gmail.com?subject=Hair Appointment Booking"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-rose/40 text-rose font-body text-xs tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose hover:text-white"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Makeup booking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-blush/[0.2] blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 border border-border rounded-xl flex items-center justify-center mb-5">
                  <Sparkles size={20} className="text-rose" />
                </div>
                <SectionLabel>Book Makeup</SectionLabel>
                <h3 className="font-display text-2xl font-light text-off-white mb-3">
                  Let's Create Your Look
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-6">
                  Bridal, glam, editorial or everyday — book your makeup session today.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${waNumber}?text=${waMakeupMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-rose text-white font-body text-xs tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose-light hover:shadow-[0_0_20px_rgba(212,132,154,0.4)]"
                  >
                    <MessageCircle size={13} /> WhatsApp
                  </a>
                  <a
                    href="mailto:angieokorie@gmail.com?subject=Makeup Appointment Booking"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-rose/40 text-rose font-body text-xs tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose hover:text-white"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Why choose */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Star,          text: 'Premium quality every time' },
              { icon: Clock,         text: 'Punctual & professional' },
              { icon: Scissors,      text: 'Certified stylist techniques' },
              { icon: Sparkles,      text: 'Melanin skin specialists' },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-3 bg-card border border-border rounded-2xl p-5 hover:border-rose/30 transition-all"
              >
                <Icon size={18} className="text-rose" />
                <span className="font-body text-xs text-muted leading-snug">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
