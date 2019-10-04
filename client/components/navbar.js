import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div class = 'links'>
        <NavLink to = '#'>link</NavLink>
        <NavLink to = '#'>link</NavLink>
        <NavLink to = '#'>link</NavLink>
      </div>
    </nav>
  )
}

export default Navbar