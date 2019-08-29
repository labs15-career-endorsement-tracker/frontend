import React from "react"
import { Route } from "react-router-dom"

import "./styles/index.scss"

import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
      <Route exact path="/" component={Dashboard} />
      <div className="container">
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    </>
  )
}

export default App
