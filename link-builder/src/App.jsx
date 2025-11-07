import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/organisms/NavBar.jsx'
import LinkBuilder from './components/Sections/LinkBuilder.jsx'
import Infosection from './components/organisms/Infosection.jsx'
import Footer from './components/organisms/Footer.jsx'

import './App.css'


function App() {
 
  return (
    <>
      <NavBar />
      <LinkBuilder />
      <Infosection />
      <Footer />
    </>
  )
}

export default App
