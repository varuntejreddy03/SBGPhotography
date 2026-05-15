import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  GiDiamondRing,
  GiChurch,
  GiMusicalNotes,
  GiHouse,
  GiBabyFace,
  GiBigDiamondRing,
} from 'react-icons/gi'
import { FaBirthdayCake } from 'react-icons/fa'

const services = [
  {
    icon: <GiDiamondRing />,
    emoji: '💍',
    title: 'Pre Wedding Shoots',
    desc: 'Romantic pre-ceremony stories crafted with cinematic elegance — your love, beautifully told.',
  },
  {
    icon: <GiChurch />,
    emoji: '💒',
    title: 'Post Wedding Shoots',
    desc: 'Reliving your beautiful union with timeless frames that capture every emotion.',
  },
  {
    icon: <GiMusicalNotes />,
    emoji: '🎵',
    title: 'Song Making',
    desc: 'Your love story set to music — cinematic wedding songs that become family heirlooms.',
  },
  {
    icon: <GiHouse />,
    emoji: '🏠',
    title: 'Indoor Shoots',
    desc: 'Studio-perfect portraits with controlled lighting and premium backdrops.',
  },
  {
    icon: <GiBabyFace />,
    emoji: '👶',
    title: 'Baby Shoots',
    desc: 'Precious little memories frozen in time — every smile, every tiny detail.',
  },
  {
    icon: <FaBirthdayCake />,
    emoji: '🎂',
    title: 'Birthdays',
    desc: 'Celebrations worth remembering — vibrant, joyful, and perfectly captured.',
  },
  {
    icon: <GiBigDiamondRing />,
    emoji: '👘',
    title: 'Half Saree Functions',
    desc: 'Timeless cultural moments documented with grace, tradition, and artistry.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative section-padding bg-dark">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-cream italic mb-4">
            What We Capture
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="font-body text-cream-muted text-sm md:text-base tracking-wider uppercase max-w-xl mx-auto">
            From intimate moments to grand celebrations — every story deserves to be told beautifully
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-services"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="group relative bg-dark-card border border-dark-border p-8 md:p-10 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_40px_rgba(201,168,76,0.08)] hover:-translate-y-2 gold-shimmer flex flex-col h-full"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/0 group-hover:border-gold/40 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/0 group-hover:border-gold/40 transition-all duration-500" />

              {/* Icon */}
              <div className="text-4xl mb-6 text-gold/80 group-hover:text-gold transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl text-cream font-medium mb-3 tracking-wide group-hover:text-gold-light transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-cream-muted/80 leading-relaxed group-hover:text-cream-muted transition-colors duration-300 flex-grow">
                {service.desc}
              </p>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
