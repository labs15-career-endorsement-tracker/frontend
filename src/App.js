import React from "react"
import { Route } from "react-router-dom"

import "./App.css"

import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Navigation from "./components/Navigation"

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Route exact path="/" component={Login} />
      <Route path="/sign-up" component={SignUp} />
    </div>
  )
}

export default App
