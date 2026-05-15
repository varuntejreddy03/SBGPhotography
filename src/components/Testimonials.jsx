import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote:
      'SBG Photography turned our wedding into a cinematic masterpiece. Every frame felt like it was pulled straight from a movie. Akhil truly has an artist\'s eye.',
    name: 'Priya & Ravi',
    event: 'Wedding Photography',
  },
  {
    quote:
      'We booked Akhil for our pre-wedding shoot and the results left us speechless. The way he captured our chemistry and the locations was absolutely magical.',
    name: 'Sneha & Karthik',
    event: 'Pre-Wedding Shoot',
  },
  {
    quote:
      'Our baby\'s first birthday photos are treasures we\'ll cherish forever. Akhil made our little one feel so comfortable, and the photos are pure joy.',
    name: 'Meera Lakshmi',
    event: 'Baby Shoot & Birthday',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative section-padding bg-dark-light">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-cream italic mb-4">
            Client Love
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="font-body text-cream-muted text-sm md:text-base tracking-wider uppercase max-w-xl mx-auto">
            Words from the families and couples we've had the honor to serve
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="group relative bg-dark/50 border border-dark-border p-8 md:p-10 hover:border-gold/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Gold quote mark */}
              <span className="font-display text-6xl text-gold/30 absolute top-4 left-6 leading-none select-none">
                &ldquo;
              </span>

              {/* Testimonial text */}
              <p className="font-body text-sm md:text-base text-cream/80 italic leading-relaxed mt-8 mb-8 flex-grow">
                {t.quote}
              </p>

              {/* Client info */}
              <div className="border-t border-dark-border pt-5 mt-auto">
                <p className="font-display text-lg text-gold font-medium tracking-wide">
                  {t.name}
                </p>
                <p className="font-body text-xs text-cream-muted tracking-wider uppercase mt-1">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
