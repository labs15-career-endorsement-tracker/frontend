import React from "react"
import { Route, Switch } from "react-router-dom"

import "./styles/index.scss"

import SignUpForm from "./components/SignUpForm"
import SignInForm from "./components/SignInForm"
import Dashboard from "./components/Dashboard"
import NotFound from "./components/NotFound"

const App = () => {
  return (
    <div className="test">
      <Switch>
        <Route exact path="/sign-in" component={SignInForm} />
        <Route exact path="/sign-up" component={SignUpForm} />
        <Dashboard />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
