import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const heroTextVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.8 },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.2 + delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const headingWords = ['Capturing', 'Moments', 'That', 'Last', 'Forever']

  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Cinematic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a140c] to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.7)_70%,rgba(10,10,10,0.95)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(61,46,30,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(201,168,76,0.06)_0%,transparent_50%)]" />

      {/* Film strip decorative elements */}
      <div className="absolute left-2 md:left-4 top-0 bottom-0 w-[1px] bg-gold/10 hidden sm:block" />
      <div className="absolute right-2 md:right-4 top-0 bottom-0 w-[1px] bg-gold/10 hidden sm:block" />

      {/* Horizontal film perforations */}
      <div className="absolute left-2 md:left-4 top-1/4 flex flex-col gap-8 hidden sm:flex">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-1 h-3 bg-gold/10 border border-gold/20 rounded-[1px]" />
        ))}
      </div>
      <div className="absolute right-2 md:right-4 top-1/4 flex flex-col gap-8 hidden sm:flex">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-1 h-3 bg-gold/10 border border-gold/20 rounded-[1px]" />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 section-container text-center">
        {/* Main heading — word by word stagger */}
        <motion.h1
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-cream leading-[1.1] mb-8 flex flex-wrap justify-center"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              className="inline-block whitespace-nowrap mr-3 sm:mr-4 md:mr-5 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub heading */}
        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className="font-body text-sm sm:text-base md:text-lg text-cream-muted tracking-[0.2em] uppercase mb-12 max-w-2xl mx-auto opacity-80"
        >
          Premium Photography & Videography Services by{' '}
          <span className="text-gold font-medium">B. Akhil Kumar</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-16"
        >
          <a
            href="#services"
            onClick={(e) => handleScroll(e, '#services')}
            className="inline-block px-10 py-4 bg-gold text-dark font-body text-xs tracking-[0.25em] uppercase font-semibold hover:bg-gold-light transition-all duration-300 gold-shimmer w-full sm:w-auto text-center"
          >
            Explore Services
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleScroll(e, '#gallery')}
            className="inline-block px-10 py-4 border border-gold/30 text-cream font-body text-xs tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-all duration-300 w-full sm:w-auto text-center"
          >
            View Gallery
          </a>
        </motion.div>

        {/* Available badge */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="animate-soft-pulse inline-flex items-center gap-3 px-6 py-2.5 bg-dark-card/40 border border-dark-border rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
          <span className="font-body text-[10px] text-cream-muted tracking-[0.15em] uppercase">
            Available Mon – Sat
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] text-cream-muted/50 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <HiChevronDown className="text-gold/60 text-xl animate-bounce-down" />
      </motion.div>
    </section>
  )
}
