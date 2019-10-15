import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isHidden: false
    }

    this.hideNav = this.hideNav.bind(this)
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

  render() {
    const hide = this.state.isHidden ? 'hide' : ''

    return (
      <div className = {`nav ${hide}`}>
        <div className = 'links'>
          <a href = '#about'>about</a>
          <a href = '#projects'>projects</a>
          <a href = '#contacts'>contact</a>
        </div>
      </div>
    )    
  }
}

export default Navbar