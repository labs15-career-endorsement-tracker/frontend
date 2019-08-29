import React from "react"
import { Route } from "react-router-dom"

import "./styles/index.scss"

import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Navigation from "./components/Navigation"
import Profile from "./components/Profile"

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Route exact path="/" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/profile" component={Profile} />
    </div>
  )
}

export default App
