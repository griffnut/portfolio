import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div class = 'links'>
        <NavLink to = '#about'>about</NavLink>
        <NavLink to = '#projects'>projects</NavLink>
        <NavLink to = '#contacts'>contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar