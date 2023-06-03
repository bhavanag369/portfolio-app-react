import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Work from './Work'

export const Mainhome = () => {
  return (
    <div>
        <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  )
}
