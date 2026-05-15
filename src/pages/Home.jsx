import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Gallery from '../components/Gallery.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
