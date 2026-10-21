import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import { Hero, About, Household, Employment, Accommodation, Values, Location, FinalCTA, Footer } from './components/Sections.jsx'
import Gallery from './components/Gallery.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return (<><a className="skip" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><About /><Household /><Gallery /><Employment /><Accommodation /><Values /><FAQ /><Contact /><Location /><FinalCTA /></main><Footer /></>)
}
