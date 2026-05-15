import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx'

import { useState } from 'react'

const portfolioImages = [
  { src: '/51066.jpg.webp', rotation: 270 },
  { src: '/51068.jpg.webp', rotation: 0 },
  { src: '/51071.jpg.webp', rotation: 270 },
  { src: '/51072.jpg.webp', rotation: 0 },
  { src: '/51074.jpg.webp', rotation: 0 },
  { src: '/51080.jpg.webp', rotation: 270 },
  { src: '/51087.jpg.webp', rotation: 270 },
  { src: '/51092.jpg.webp', rotation: 270 },
  { src: '/51104.jpg.webp', rotation: 0 },
  { src: '/93814.jpg.webp', rotation: 270 },
  { src: '/93831.jpg.webp', rotation: 270 },
  { src: '/93833.jpg.webp', rotation: 270 },
  { src: '/93953.jpg.webp', rotation: 0 },
  { src: '/93980.jpg.webp', rotation: 0 },
  { src: '/93982.jpg.webp', rotation: 270 },
  { src: '/94003.jpg.webp', rotation: 0 },
  { src: '/94005.jpg.webp', rotation: 0 },
  { src: '/94007.jpg.webp', rotation: 0 },
  { src: '/94018.jpg.webp', rotation: 270 },
  { src: '/94030.jpg.webp', rotation: 0 },
  { src: '/94045.jpg.webp', rotation: 270 },
  { src: '/94046.jpg.webp', rotation: 0 },
  { src: '/94217.jpg.webp', rotation: 0 },
  { src: '/94229.jpg.webp', rotation: 0 },
  { src: '/94232.jpg.webp', rotation: 0 },
  { src: '/94245.jpg.webp', rotation: 0 }
]

export default function Portfolio() {

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20 bg-dark min-h-screen">
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-cream italic mb-6">
              Our Masterpieces
            </h1>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
            <p className="font-body text-cream-muted text-sm md:text-base tracking-wider uppercase max-w-2xl mx-auto leading-relaxed">
              Every photograph is a milestone. Explore the timeless moments we have had the privilege to capture, exclusively shot by SBG Photography.
            </p>
          </motion.div>

          {/* Premium Square Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {portfolioImages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="group relative aspect-square overflow-hidden bg-dark-light shadow-lg shadow-black/50 rounded-sm"
              >
                <img
                  src={item.src}
                  alt={`Portfolio capture ${i + 1}`}
                  decoding="async"
                  className={`w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 group-hover:scale-110 ${
                    item.rotation === 270 ? '-rotate-90' : item.rotation === 90 ? 'rotate-90' : ''
                  }`}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 pointer-events-none">
                  <span className="font-display text-xl text-gold italic mb-1 transform-gpu">
                    Signature Capture
                  </span>
                  <span className="font-body text-[10px] text-cream tracking-[0.2em] uppercase transform-gpu">
                    SBG Photography
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
