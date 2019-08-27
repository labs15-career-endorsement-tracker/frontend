import React from "react"

import "./App.css"

import Login from "./components/login"
import Navigation from "./components/navigation"

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Login />
    </div>
  )
}

export default App
