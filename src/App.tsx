import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
