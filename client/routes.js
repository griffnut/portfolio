import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Navbar } from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component = { Home } />
      </Switch>
    )
  }
}

export default Routes