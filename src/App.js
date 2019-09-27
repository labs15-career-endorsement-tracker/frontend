import React from "react"
import { Switch } from "react-router-dom"

import "./styles/index.scss"

import NotFound from "./components/pages/NotFound"
import FormLayout from "./components/layout/FormLayout"
import DashboardLayout from "./components/layout/DashboardLayout"
import { PublicRoute } from "./components/routes"

const App = () => {
  return (
    <>
      <Switch>
        <PublicRoute path="/auth" component={FormLayout}></PublicRoute>
        <PublicRoute path="/" component={DashboardLayout}></PublicRoute>
        <PublicRoute component={NotFound}></PublicRoute>
      </Switch>
    </>
  )
}

export default App
