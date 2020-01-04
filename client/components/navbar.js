import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import '../styles/navbar.scss'

class Navbar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isHidden: false,
    }

    this.hideNav = this.hideNav.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
  }

  componentDidMount() {
    smoothscroll.polyfill(); //enable smoothscrolls for other browsers i.e. internet explorer
    window.addEventListener('scroll', this.hideNav)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNav)
  }

  hideNav() {
    let { isHidden } = this.state

    window.scrollY > this.prev && document.documentElement.scrollTop > 60
    ? !isHidden && this.setState({ isHidden: true })
    : isHidden && this.setState({ isHidden: false })

    this.prev = window.scrollY
  }

  scrollTo(id) {
    const section = document.getElementById(id)

    if (section) {
      if (document.getElementById('nav').className === 'nav responsive') {
        nav.className = 'nav'
      }
      section.scrollIntoView({ behavior: 'smooth' })
      
    }   
  }

  hamburger() {
    const nav = document.getElementById('nav')

    if (nav.className === 'nav') {
      nav.className += ' responsive'
    } else {
      nav.className = 'nav'
    }
  }

  render() {
    const hide = this.state.isHidden ? ' hide' : ''

    return (
      <div className = {`nav${hide}`} id = 'nav'>
        <div className = 'logo'>Lily Li</div>
        <div className = 'icon' onClick = {() => this.hamburger()} />
        <div className = 'links'>
          {
            this.props.links.map(link => 
              <div key = {link} onClick = {() => this.scrollTo(link)}>{link}</div>
            )
          }
        </div>
      </div>
    )    
  }
}

export default Navbar