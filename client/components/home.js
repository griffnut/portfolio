import React from 'react'
import { Logo, Navbar, Projects } from './'

const Home = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <Navbar links = {['about', 'projects']} />
      <div className = 'landing'  id = 'about'>
        <Logo />
        <h2>hello world</h2>

        <div className = 'about'>
          <h3>My name is Lily Li, a fullstack/frontend developer.</h3>

          <p>I've always been drawn to coding ever since I was a child dabbling with HTML and CSS on Neopets in an attempt to make my pages stand out. From then, I have always wanted to create something fun, engaging, and convenient.</p>

          <b>frontend</b>
          <p>javascript // html5 // css // scss // react-redux //threejs // babylonjs</p>

          <b>backend</b>
          <p>node.js // express // postgresql // sequelize</p>
        </div>
      </div>

      <Projects />

      <div className = 'footer'>© {year} Lily Li</div>
    </>
  )
}

export default Home