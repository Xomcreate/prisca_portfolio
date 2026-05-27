import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './MainComponets/Navbar'
import Hero from './MainComponets/Hero'
import Projects from './MainComponets/Projects'
import Skills from './MainComponets/Skills'
import About from './MainComponets/About'
import Contact from './MainComponets/Contact'
import Footer from './MainComponets/Footer'
import Experience from './MainComponets/Experience'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Navbar/>
<Hero/>
<Projects/>
<Experience/>
<Skills/>
<About/>
<Contact/>
<Footer/>
</StrictMode>,
)

// Skills
// About
// Contact
// Footer