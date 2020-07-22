import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import "./app.css"

// Components
import NavBar from "./components/nav-bar"

// Pages
import Workflow from "./pages/workflow"
import Login from "./pages/login"
import About from "./pages/about"
import Wiki from "./pages/wiki"

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/wiki">
            <Wiki />
          </Route>
          <Route path="/">
            <Workflow />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
