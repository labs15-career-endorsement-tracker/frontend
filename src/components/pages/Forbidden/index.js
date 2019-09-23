import React from "react"
import { Link } from "react-router-dom"

const Forbidden = () => {
  return (
    <main>
      <h1>Sorry! This page is only for coaches.</h1>
      <Link to="/">Go Home</Link>
    </main>
  )
}

export default Forbidden
