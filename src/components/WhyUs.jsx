import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiOutlineCamera, HiOutlineClock, HiOutlineLightBulb } from 'react-icons/hi'

const stats = [
  { target: 500, suffix: '+', label: 'Events Captured' },
  { target: 25, suffix: '+', label: 'Years of Legacy' },
  { target: 1000, suffix: '+', label: 'Happy Clients' },
]

const values = [
  {
    icon: <HiOutlineCamera className="text-3xl" />,
    title: 'Professional Equipment',
    desc: 'Top-tier cameras, lenses, and lighting setups for flawless results in every environment.',
  },
  {
    icon: <HiOutlineClock className="text-3xl" />,
    title: 'On-Time Delivery',
    desc: 'We respect your timeline — edited, polished, and delivered right when promised.',
  },
  {
    icon: <HiOutlineLightBulb className="text-3xl" />,
    title: 'Creative Vision',
    desc: 'Every frame is composed with artistic intention — no cookie-cutter templates.',
  },
]

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-gold">
      {count}
      {suffix}
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="relative section-padding bg-[#111111]"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-cream italic mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="font-body text-cream-muted text-sm md:text-base tracking-wider uppercase max-w-xl mx-auto">
            Trusted by hundreds of families to capture their most precious milestones
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariant} className="text-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <p className="font-body text-sm text-cream-muted tracking-[0.2em] uppercase mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((val, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              className="group text-center bg-dark/50 border border-dark-border p-8 md:p-10 hover:border-gold/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 text-gold mb-6 mx-auto group-hover:bg-gold/10 transition-all duration-300">
                {val.icon}
              </div>
              <h3 className="font-display text-xl text-cream font-medium mb-3 tracking-wide">
                {val.title}
              </h3>
              <p className="font-body text-sm text-cream-muted/80 leading-relaxed flex-grow">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
