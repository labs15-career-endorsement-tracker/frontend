import React from "react"
import { Route } from "react-router-dom"

import "./styles/index.scss"

import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Navigation from "./components/Navigation"
import Dashboard from "./components/Dashboard"

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Route exact path="/" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  )
}

export default App
