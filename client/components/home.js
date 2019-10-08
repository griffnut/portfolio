import React from 'react'
import '../../public/logo.scss'
import { Logo } from './'

const Home = () => {
  return (
    <>
      <div className = 'landing'>
        <Logo />

        <h2 className = 'hello'>hello world</h2>
      </div>

      <div className = 'project-container'>
        <h2>projects</h2>
        
      </div>
    </>
  )
}

export default Home