import React from 'react'
import '../../public/navbar.scss'

class Navbar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isHidden: false,
      links: ['about', 'projects']
    }

    this.hideNav = this.hideNav.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideNav)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNav)
  }

  hideNav() {
    let { isHidden } = this.state

    window.scrollY > this.prev
    ? !isHidden && this.setState({ isHidden: true })
    : isHidden && this.setState({ isHidden: false })

    this.prev = window.scrollY
  }

  scrollTo(id) {
    const section = document.getElementById(id)
    console.log(section)

    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  hamburger() {
    const nav = document.getElementById('nav')

    if (nav.className === 'nav ') {
      nav.className += 'responsive'
    } else {
      nav.className = 'nav '
    }
  }

  render() {
    const hide = this.state.isHidden ? 'hide' : ''

    return (
      <div className = {`nav ${hide}`} id = 'nav'>
        <div className = 'logo'>Lily Li</div>
        <div className = 'icon' onClick = {() => this.hamburger()} />
        <div className = 'links'>
          {
            this.state.links.map(link => 
              <div key = {link} onClick = {() => this.scrollTo(link)}>{link}</div>
            )
          }
        </div>
      </div>
    )    
  }
}

export default Navbar