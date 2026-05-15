import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/#services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/', '')
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.querySelector(targetId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const el = document.querySelector(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? 'bg-dark/85 backdrop-blur-xl border-b border-dark-border shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-baseline gap-1.5 group min-w-0 flex-shrink"
          >
            <span className="font-display text-2xl sm:text-3xl font-semibold text-gold tracking-wider group-hover:text-gold-light transition-colors duration-300">
              SBG
            </span>
            <span className="font-body text-[10px] sm:text-xs text-cream-muted tracking-[0.15em] sm:tracking-[0.25em] uppercase group-hover:text-cream transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
              Photography
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body text-sm text-cream-muted tracking-wider uppercase hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="inline-block ml-4 px-6 py-2.5 border border-gold text-gold text-sm font-body tracking-wider uppercase rounded-none hover:bg-gold hover:text-dark transition-all duration-400 gold-shimmer"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream text-2xl p-2 hover:text-gold transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001]"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-sm bg-dark-light/95 backdrop-blur-2xl border-l border-dark-border z-[1002] flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-cream text-2xl hover:text-gold transition-colors"
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col items-start px-8 gap-6 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-display text-2xl text-cream hover:text-gold transition-colors duration-300 tracking-wide block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to="/#contact"
                    onClick={(e) => handleNavClick(e, '/#contact')}
                    className="inline-block mt-6 px-8 py-3 border border-gold text-gold font-body text-sm tracking-wider uppercase hover:bg-gold hover:text-dark transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="mt-auto px-8 pb-8">
                <p className="text-cream-muted text-xs font-body tracking-wider">
                  © 2025 SBG Photography
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
