import React from "react"
import { Route, Switch } from "react-router-dom"

import "./styles/index.scss"

import SignUpForm from "./components/SignUpForm"
import SignInForm from "./components/SignInForm"
import Dashboard from "./components/Dashboard"
import NotFound from "./components/NotFound"

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/sign-in" component={SignInForm} />
      <Route path="/sign-up" component={SignUpForm} />
      <Route component={NotFound}></Route>
    </Switch>
  )
}

export default App
