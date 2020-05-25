import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import "./App.css"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Users from "./components/Users"
import About from "./components/About"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
