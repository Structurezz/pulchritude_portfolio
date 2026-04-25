import { motion } from 'framer-motion'
import { ChefHat, Utensils, Users, CalendarCheck, Mail } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionLabel from '../components/SectionLabel'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const specialties = [
  { name: 'Nigerian Cuisine', desc: 'Authentic dishes from across Nigeria — jollof rice, egusi, ofe onugbu, afang, and more crafted with heritage and love.' },
  { name: 'Continental Dishes', desc: 'French-inspired sauces, pasta, grills, and plated presentations that meet international fine-dining standards.' },
  { name: 'Pastry & Desserts', desc: 'Custom cakes, pastries, and dessert platters for celebrations and events.' },
  { name: 'Healthy Meal Prep', desc: 'Nutritionally balanced weekly meal prep tailored to dietary goals and lifestyle preferences.' },
]

// Real food photos from Unsplash (curated for each dish)
const dishes = [
  { name: 'Jollof Rice & Chicken',       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSiXtoDmivWWi6PrMgv8Xfm_jNsuz4YDz4A&s' },
  { name: 'Fried Rice & Chicken',       img: 'https://joyfulcook.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-08.19.16_b42bb842-e1736965251390.jpg' },
  { name: 'Ofe Onugbu',                   img: 'https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/bitterleaf-soup.jpg' },
  { name: 'Afang Soup',                   img: 'https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2017/09/afang-soup-pot-ready.jpg?resize=750%2C1125&ssl=1' },
  { name: 'Egusi Soup',                   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8txJCvrbIYs9ONIV5Q8haNSOdHB4UYFD3vA&s' },
  { name: 'Puff Puff',                    img: 'https://www.preciouscore.com/wp-content/uploads/2016/11/How-To-Make-Puff-Puff-500x500.jpg' },
  { name: 'Moi Moi',                      img: 'https://shop.africanfoodsupermarket.com/cdn/shop/articles/moi_moi_1024x.jpg?v=1611605450' },
  { name: 'Pepper Soup',                  img: 'https://i.ytimg.com/vi/f061fu8V8rY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBS34_-AtEzgsVDh3w_52y1l18oQ' },

]

const services = [
  {
    icon: Users,
    title: 'Private Dining',
    desc: 'Bespoke multi-course dining experiences in the comfort of your home or venue.',
    price: 'From ₦80,000',
  },
  {
    icon: CalendarCheck,
    title: 'Event Catering',
    desc: 'Full-service catering for weddings, corporate events, birthdays, and private parties.',
    price: 'Custom Quote',
  },
  {
    icon: Utensils,
    title: 'Weekly Meal Prep',
    desc: 'Freshly prepared, portioned meals delivered weekly to your door.',
    price: 'From ₦35,000/week',
  },
  {
    icon: ChefHat,
    title: 'Cooking Classes',
    desc: 'One-on-one and group cooking lessons covering Nigerian and continental cuisine.',
    price: 'From ₦25,000/session',
  },
]

export default function Culinary() {
  return (
    <motion.div {...pageTransition}>
      <HeroSection
        label="Culinary Arts"
        title={
          <>
            Flavours of{' '}
            <span className="italic" style={{ color: '#F97316' }}>Artistry</span>
          </>
        }
        subtitle="Chef — Food Entrepreneur — Culinary Artist"
        description="Angela's kitchen is where culture meets creativity. Drawing from a rich Nigerian heritage and continental technique, she crafts dining experiences that nourish the soul and delight the palate."
        accentColor="#F97316"
      />

      {/* SPECIALTIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionLabel>Cuisine Specialties</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          What She Cooks
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialties.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-300 group"
            >
              <div className="w-10 h-px bg-orange-500/60 mb-5" />
              <h3 className="font-display text-2xl font-medium text-off-white mb-3 group-hover:text-orange-300 transition-colors">
                {s.name}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SIGNATURE DISHES GALLERY */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Signature Dishes</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
          >
            The Gallery
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {dishes.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden border border-border rounded-2xl hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300"
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full aspect-square object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent flex items-end p-4 rounded-2xl">
                  <span className="font-body text-xs font-medium text-off-white leading-tight">{dish.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Services</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          Culinary Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-border rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/40 transition-colors">
                  <svc.icon size={20} className="text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-medium text-off-white mb-2">{svc.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed mb-4">{svc.desc}</p>
                  <span className="font-mono text-xs text-gold border border-gold/30 rounded-full px-3 py-1">{svc.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-surface border-t border-border relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-500/[0.05] blur-3xl pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ChefHat size={32} className="text-orange-400 mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-off-white mb-4">
              Book a Culinary Experience
            </h2>
            <p className="font-body text-muted max-w-lg mx-auto mb-10">
              Whether it's an intimate dinner or a grand event, Angela brings culinary artistry to every table.
              Get in touch to book your experience.
            </p>
            <a
              href="mailto:angieokorie@gmail.com?subject=Catering Enquiry"
              className="inline-flex items-center gap-3 px-10 py-4 bg-rose text-bg font-body text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-rose-light hover:shadow-[0_0_30px_rgba(212,132,154,0.4)]"
            >
              <Mail size={14} /> Make a Booking Enquiry
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
