import React from "react"
import { Route } from "react-router-dom"

import "./styles/index.scss"

import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

const App = () => {
  return (
    <>
      <div className="container">
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    </>
  )
}

export default App
