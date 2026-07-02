import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './features/hero/Hero'
import About from './features/about/About'
import SkillsBento from './features/skills/SkillsBento'
import Projects from './features/projects/Projects'
import Experience from './features/experience/Experience'
import TechStack from './features/techstack/TechStack'
// import Testimonials from './features/testimonials/Testimonials'
// import Blog from './features/blog/Blog'
import Contact from './features/contact/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-accent-green selection:text-bg overflow-x-hidden font-sans">
      {/* Custom glowing cursor trail */}
      <CustomCursor />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Spotlight cursor glow overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-100 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 255, 53, 0.035), transparent 80%)`
        }}
      />

      <Navbar />

      {/* Grid container holding all sections */}
      <main className="max-w-7xl mx-auto border-x border-border shadow-2xl relative z-10 bg-bg">
        <Hero />
        <About />
        <SkillsBento />
        <Projects />
        <Experience />
        <TechStack />
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App