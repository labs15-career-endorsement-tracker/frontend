import React from "react"
import { Route, Switch } from "react-router-dom"

import "./styles/index.scss"

import NotFound from "./components/pages/NotFound"
import FormLayout from "./components/layout/FormLayout"
import DashboardLayout from "./components/layout/DashboardLayout"

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/auth" component={FormLayout}></Route>
        <Route path="/" component={DashboardLayout}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </>
  )
}

export default App
