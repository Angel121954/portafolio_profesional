import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/public/data/data.json')
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar data.json')
        return res.json()
      })
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080b14]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <p className="font-mono text-cyan-400 text-sm animate-pulse">Cargando portafolio...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080b14]">
        <p className="font-mono text-red-400">Error: {error}</p>
      </div>
    )
  }

  return (
    <div data-theme="devdark" className="bg-[#080b14] text-slate-100 min-h-screen">
      <Navbar personal={data.personal} />
      <Hero slides={data.hero_slides} personal={data.personal} contact={data.contact} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Contact contact={data.contact} />
      <Footer personal={data.personal} />
    </div>
  )
}

export default App
