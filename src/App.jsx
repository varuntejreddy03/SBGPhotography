import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'

function App() {
  return (
    <div className="film-grain">
      <ScrollToTop />
      {/* Cinematic load overlay */}
      <div className="cinematic-overlay">
        <span>SBG</span>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ScrollToTopButton />
    </div>
  )
}

export default App
