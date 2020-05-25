import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import "./app.css"

import NavBar from "./components/nav-bar"
import Home from "./components/home"
import Users from "./components/users"
import About from "./components/about"


export default function App() {
  return (
    <Router>
      <div>
        <NavBar title="React Reference" />
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
