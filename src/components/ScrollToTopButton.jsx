import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronUp } from 'react-icons/hi'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-[998] w-10 h-10 md:w-12 md:h-12 bg-gold/90 text-dark rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:bg-gold hover:shadow-[0_6px_30px_rgba(201,168,76,0.5)] transition-all duration-300"
          aria-label="Scroll to top"
        >
          <HiChevronUp className="text-xl md:text-2xl" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
