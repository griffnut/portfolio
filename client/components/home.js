import React from 'react'
import '../../public/logo.scss'
import { Logo } from './'

const Home = () => {
  return (
    <>
      <div className = 'landing'>
        <Logo />
        <h2>hello world</h2>

        <div className = 'about'>
          <h3>My name is Lily Li, a fullstack/frontend developer.</h3>

          <p>I've always been drawn to creativity ever since I was a child from drawing to dabbling with HTML and CSS on Neopets. From then, I have always wanted to create something fun, engaging, and convenient using code. I pursued the fast route of taking a bootcamp to learn how to create my own website.</p>

          <b>frontend</b>
          <p>javascript // html5 // css // scss // react-redux //threejs // babylonjs</p>

          <b>backend</b>
          <p>node.js // express // postgresql // sequelize</p>
        </div>
      </div>

      <div className = 'project-container'>
        <h1>projects</h1>
        <div className = 'project'>
          <div className = 'about'>
            <h2>Venus Fly Trap</h2>
            <h3><a href='http://venus-fly-trap.herokuapp.com/'>venus-fly-trap.herokuapp.com</a> // E-Commerce</h3>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et lobortis ante. Vivamus convallis, ante sed sodales hendrerit, quam eros pharetra tellus, ut malesuada ligula magna dapibus metus. Aenean nec sagittis sapien. Aliquam scelerisque fringilla neque. In aliquet dolor sit amet lobortis sodales. Pellentesque vulputate vehicula justo vitae aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eleifend tortor et dictum commodo. Integer vel volutpat metus. Pellentesque fermentum leo et diam consequat interdum. Mauris vel viverra risus, eu luctus justo. Quisque justo ante, cursus vitae condimentum in, efficitur quis diam. Sed posuere eros tellus, eu sagittis risus porttitor sit amet.
            
          </div>

          <div className = 'pictures'></div>
        </div>
      </div>
    </>
  )
}

export default Home