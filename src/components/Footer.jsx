import { motion } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/#contact' },
]

const servicesList = [
  'Pre Wedding Shoots',
  'Post Wedding Shoots',
  'Song Making',
  'Indoor Shoots',
  'Baby Shoots',
  'Birthdays',
  'Half Saree Functions',
]

const socials = [
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/917989468324', label: 'WhatsApp' },
]

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e, href) => {
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
    <footer className="relative bg-dark-light border-t border-dark-border pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="section-container">
        <div className="grid-footer">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl sm:text-3xl font-semibold text-gold tracking-wider">
                SBG
              </span>
              <span className="font-body text-[10px] sm:text-xs text-cream-muted tracking-[0.15em] sm:tracking-[0.25em] uppercase">
                Photography
              </span>
            </div>
            <p className="font-display text-base text-cream-muted italic leading-relaxed">
              &ldquo;Every frame tells your story.&rdquo;
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-10 h-10 border border-dark-border flex items-center justify-center text-cream-muted hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-cream tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-body text-sm text-cream-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-cream tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesList.map((s) => (
                <li key={s} className="font-body text-sm text-cream-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-cream tracking-wide">
              Reach Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+917989468324"
                className="flex items-center gap-3 font-body text-sm text-cream-muted hover:text-gold transition-colors"
              >
                <HiOutlinePhone className="text-gold text-base flex-shrink-0" />
                +91 79894 68324
              </a>
              <a
                href="mailto:bairapoguakhilkumar@gmail.com"
                className="flex items-center gap-3 font-body text-sm text-cream-muted hover:text-gold transition-colors break-all"
              >
                <HiOutlineMail className="text-gold text-base flex-shrink-0" />
                bairapoguakhilkumar@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream-muted/60 tracking-wider text-center md:text-left">
            © 2025 SBG Photography · All Rights Reserved
          </p>
          <p className="font-body text-xs text-cream-muted/40 tracking-wider">
            Crafted with passion & precision
          </p>
        </div>
      </div>
    </footer>
  )
}
