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

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <DemoShowcase />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
