import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/organisms/NavBar.jsx'
import LinkBuilder from './components/Pages/LinkBuilder.jsx'

import './App.css'


function App() {
 
  return (
    <>
      <NavBar />
      <LinkBuilder />
    </>
  )
}

export default App
