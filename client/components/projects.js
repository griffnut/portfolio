import React from 'react'

const Projects = () => {
  return (
    <div className = 'project-container' id = 'projects'>
      <h1>projects</h1>
      <div className = 'project'>
        <div className = 'pictures'><img src = './images/vft.png' /></div>
        <div className = 'about'>
          <div className = 'title'>
            <h2>Venus Fly Trap</h2>
            <a href='http://venus-fly-trap.herokuapp.com/'>venus-fly-trap.herokuapp.com</a>
          </div>

          <div>
            <p>Plants are great, succulents are hardy, come visit this site to do e-commerce things. Here at venus fly trap, you can purchase digital plants and have the joy of not having the responsibility to take care of them.</p>
            <p>Taskmaster • Full-Stack Developer</p>
          </div>

          <p className = 'techs'>javascript • react-redux • css • postgresql • express • google oauth • stripe</p>
          
        </div>
      </div>

      <div className = 'project'>
        <div className = 'pictures'><img src = './images/cat.png' /></div>
        <div className = 'about'>
          <div className = 'title'>
            <h2>Meoware</h2>
            <a href='https://github.com/griffnut/meoware'>github.com/griffnut/meoware</a>
          </div>

          <div>
            <p>Ever just want to pet a cat but you don't have one? Well, here's a cat. A digital one... with a bonus duck! A small hackathon project to test out new technologies.</p>
            <p>Sole Developer</p>
          </div>

          <p className = 'techs'>javascript • electron • react</p>
          
        </div>
      </div>

      <div className = 'project'>
        <div className = 'pictures'><img src = './images/panda.png' /></div>
        <div className = 'about'>
          <div className = 'title'>
            <h2>Pandance</h2>
            <a href='http://pandance.herokuapp.com/'>pandance.herokuapp.com</a>
          </div>

          <div>
            <p>Feeling stressed? Then take a moment to watch a panda (and robot) dance to each keystroke. Want to test your reaction speed and typing skills? Then check out dance dance pandalution mode!</p>
            <p>Frontend Developer</p>
          </div>

          <p className = 'techs'>javascript • react-redux • css • postgresql • express • babylonjs • blender</p>
          
        </div>
      </div>

      <div className = 'project'>
        <div className = 'pictures'><img src = './images/ryse.png' /></div>
        <div className = 'about'>
          <div className = 'title'>
            <h2>Ryse</h2>
            <a href='https://ryse.network/'>ryse.network</a>
          </div>

          <div>
            <p>A site to help people of all nationalities network with eachother. Managed and started by a group of Asians to help others when it comes to careers and general life stuff.</p>
            <p>Frontend Developer</p>
          </div>

          <p className = 'techs'>javascript • react • scss • graphql</p>
          
        </div>
      </div>
    </div>
  )
}

export default Projects