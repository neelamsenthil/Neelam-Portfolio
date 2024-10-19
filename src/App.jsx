import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav-Component/Nav'
import Hero from './Components/Hero-Component/Hero'
import Skill from './Components/Skilles-Component/Skill'
import Project from './Components/Projuct-Component/Project'
import Contact from './Components/Contact-Component/Contact'
import Footer from './Components/Footer-Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Nav />
    <Hero />
    <Skill />
    <Project />
    <Contact />
    <Footer />

    </div>
    </>
  )
}

export default App
