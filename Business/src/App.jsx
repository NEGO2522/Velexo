import { Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import './hero-demo.css'
import './responsive.css'
import './legal.css'

import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import DemoShowcase from './components/DemoShowcase'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <DemoShowcase />
      <Results />
      <Testimonials />
      <Contact />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
