import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import portfolioData from './data/portfolioData'

function App() {
  const { personal, hero_slides, projects, skills, contact } = portfolioData

  return (
    <div data-theme="devdark" className="bg-[#080b14] text-slate-100 min-h-screen">
      <Navbar personal={personal} />
      <Hero slides={hero_slides} personal={personal} contact={contact} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact contact={contact} />
      <Footer personal={personal} />
    </div>
  )
}

export default App
