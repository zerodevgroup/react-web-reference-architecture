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
import Users from "./pages/users"
import About from "./pages/about"


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
            <Workflow />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
