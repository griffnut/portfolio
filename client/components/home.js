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

          <p>My first experience with 'coding' as was a child was messing with HTML and CSS on Neopets. Out of high school, I went to a coding bootcamp to learn how to create functional websites. I still have much to learn, but I'm passionate and willing to try new technologies to further my growth.</p>

          <b>frontend</b>
          <p>javascript // html5 // css // scss // react-redux // threejs</p>

          <b>backend</b>
          <p>node.js // express // postgresql // sequelize // mongodb</p>
        </div>
      </div>

      <Projects />

      <div className = 'footer'>© {year} Lily Li</div>
    </>
  )
}

export default Home