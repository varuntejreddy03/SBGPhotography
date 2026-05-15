import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917989468324"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, duration: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-shadow duration-300"
    >
      <FaWhatsapp className="text-white text-xl md:text-2xl" />

      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  )
}
