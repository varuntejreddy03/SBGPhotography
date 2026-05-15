import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx'
import { HiOutlineCamera, HiOutlineVideoCamera, HiOutlinePhotograph } from 'react-icons/hi'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20 bg-[#0A0A0A] min-h-screen">
        <div className="section-container">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-24"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-cream italic mb-6">
              The Story Behind the Lens
            </h1>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          </motion.div>

          <div className="max-w-4xl mx-auto items-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12 text-center"
            >
              <div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-3">B. Akhil Kumar</h2>
                <p className="font-body text-sm md:text-base text-cream-muted uppercase tracking-[0.3em]">Founder & Lead Photographer</p>
              </div>
              
              <div className="space-y-6 font-body text-cream/80 leading-relaxed text-base md:text-lg max-w-3xl mx-auto text-left sm:text-center">
                <p>
                  At SBG Photography, we believe that the most powerful stories are told without words. Founded by B. Akhil Kumar, our studio has dedicated itself to the fine art of cinematic photography and videography.
                </p>
                <p>
                  What started as a passionate endeavor has blossomed into a full-scale luxury production house. We don't just point and shoot; we compose, direct, and meticulously craft frames that evoke genuine emotion.
                </p>
                <p>
                  Whether it's the subtle tear at a wedding altar or the vibrant energy of a birthday celebration, our goal is to freeze time beautifully so that your legacy can be cherished for generations to come.
                </p>
              </div>

              <div className="pt-12 border-t border-dark-border grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center group">
                  <HiOutlineCamera className="text-4xl text-gold mx-auto mb-4 transition-transform group-hover:scale-110" />
                  <p className="font-display text-xl text-cream">Candid Magic</p>
                </div>
                <div className="text-center group">
                  <HiOutlineVideoCamera className="text-4xl text-gold mx-auto mb-4 transition-transform group-hover:scale-110" />
                  <p className="font-display text-xl text-cream">Cinematic Film</p>
                </div>
                <div className="text-center group">
                  <HiOutlinePhotograph className="text-4xl text-gold mx-auto mb-4 transition-transform group-hover:scale-110" />
                  <p className="font-display text-xl text-cream">Studio Perfect</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
