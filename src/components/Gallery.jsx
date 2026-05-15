import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { HiOutlineCamera } from 'react-icons/hi'

const images = [
  {
    url: '/51071.jpg.webp',
    category: 'Wedding',
    title: 'Eternal Grace',
    rotation: 270
  },
  {
    url: '/94046.jpg.webp',
    category: 'Pre Wedding',
    title: 'Desert Whispers',
    rotation: 0
  },
  {
    url: '/94232.jpg.webp',
    category: 'Ceremony',
    title: 'Traditional Vows',
    rotation: 0
  },
  {
    url: '/51092.jpg.webp',
    category: 'Portrait',
    title: 'Innocence',
    rotation: 270
  },
  {
    url: '/94229.jpg.webp',
    category: 'Event',
    title: 'Celebration',
    rotation: 0
  },
  {
    url: '/94045.jpg.webp',
    category: 'Fashion',
    title: 'Modern Style',
    rotation: 270
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="gallery"
      className="relative section-padding bg-dark"
    >
      <div className="section-container">
        {/* Section Header ... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-cream italic mb-4">
            Our Portfolio
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="font-body text-cream-muted text-sm md:text-base tracking-wider uppercase max-w-xl mx-auto">
            A glimpse into the moments we&apos;ve been privileged to capture
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8"
        >
          {images.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              className="group relative aspect-square overflow-hidden bg-dark-light"
            >
              <img
                src={item.url}
                alt={item.title}
                decoding="async"
                className={`w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 group-hover:scale-110 ${
                  item.rotation === 270 ? '-rotate-90' : item.rotation === 90 ? 'rotate-90' : ''
                }`}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800';
                }}
              />
              {/* Overlays ... */}
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="transform scale-75 group-hover:scale-100 transition-all duration-500 flex flex-col items-center gap-2 text-center px-4">
                  <HiOutlineCamera className="text-gold text-2xl" />
                  <span className="font-body text-[10px] text-cream tracking-[0.2em] uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link
            to="/portfolio"
            className="inline-block px-10 py-3.5 border border-gold text-gold font-body text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-400 gold-shimmer"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
