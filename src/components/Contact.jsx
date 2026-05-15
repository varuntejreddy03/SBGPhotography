import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineLocationMarker,
} from 'react-icons/hi'

const workingHours = [
  { days: 'Monday – Friday', time: '9:00 AM – 7:00 PM', open: true },
  { days: 'Saturday', time: '9:00 AM – 5:00 PM', open: true },
  { days: 'Sunday', time: 'Closed', open: false },
]

const serviceOptions = [
  'Pre Wedding Shoots',
  'Post Wedding Shoots',
  'Song Making',
  'Indoor Shoots',
  'Baby Shoots',
  'Birthdays',
  'Half Saree Functions',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the WhatsApp message
    const phoneNumber = "917989468324"
    const text = `*New Inquiry for SBG Photography* 📸\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n\n*Message:*\n${formData.message}`
    
    // Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
    
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="relative section-padding bg-[#0A0A0A]"
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
            Get In Touch
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="font-body text-cream-muted text-sm md:text-base tracking-wider uppercase max-w-xl mx-auto">
            Ready to create something beautiful? Let&apos;s talk about your vision.
          </p>
        </motion.div>

        {/* Split Layout — 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Contact Info & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            {/* Contact Info ... */}
            <div>
              <h3 className="font-display text-2xl text-cream italic mb-8 tracking-wide">
                Contact Information
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:+917989468324"
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300">
                    <HiOutlinePhone className="text-gold text-xl" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-cream-muted uppercase tracking-wider mb-1">Primary</p>
                    <p className="font-body text-base text-cream group-hover:text-gold transition-colors">+91 79894 68324</p>
                  </div>
                </a>
                {/* ... other items ... */}
                <a
                  href="mailto:bairapoguakhilkumar@gmail.com"
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300">
                    <HiOutlineMail className="text-gold text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-xs text-cream-muted uppercase tracking-wider mb-1">Email</p>
                    <p className="font-body text-base text-cream group-hover:text-gold transition-colors break-all">bairapoguakhilkumar@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Working Hours ... */}
            <div>
              <h3 className="font-display text-2xl text-cream italic mb-8 tracking-wide flex items-center gap-3">
                <HiOutlineClock className="text-gold" />
                Working Hours
              </h3>
              <div className="border border-dark-border bg-dark-card/30 overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {workingHours.map((item, i) => (
                      <tr key={i} className="border-b border-dark-border last:border-b-0">
                        <td className="py-4 px-6 font-body text-sm text-cream">{item.days}</td>
                        <td className="py-4 px-6 font-body text-sm text-cream-muted text-right">{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-dark-card/50 border border-dark-border p-8 md:p-12 lg:p-14"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-body text-xs text-cream-muted uppercase tracking-[0.2em] mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-dark-border px-5 py-4 font-body text-sm text-cream focus:border-gold/50 transition-all outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-cream-muted uppercase tracking-[0.2em] mb-3">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-dark-border px-5 py-4 font-body text-sm text-cream focus:border-gold/50 transition-all outline-none"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-xs text-cream-muted uppercase tracking-[0.2em] mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-dark-border px-5 py-4 font-body text-sm text-cream focus:border-gold/50 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-body text-xs text-cream-muted uppercase tracking-[0.2em] mb-3">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-dark-border px-5 py-4 font-body text-sm text-cream focus:border-gold/50 transition-all outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-cream-muted">Select a service</option>
                  {serviceOptions.map(opt => <option key={opt} value={opt} className="bg-dark text-cream">{opt}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-body text-xs text-cream-muted uppercase tracking-[0.2em] mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-dark border border-dark-border px-5 py-4 font-body text-sm text-cream focus:border-gold/50 transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-dark font-body text-sm font-semibold uppercase tracking-[0.25em] py-4 transition-all duration-300"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
