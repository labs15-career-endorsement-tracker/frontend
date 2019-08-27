import React from "react"
import React, { Component } from "react"
import axios from "axios"
import { Route } from 'react-router-dom'

import "./App.css"

import SignUp from "./components/SignUp"
import Login from "./components/login"
import Navigation from "./components/navigation"

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Login />
      <SignUp />
    </div>
  )
}

export default App
