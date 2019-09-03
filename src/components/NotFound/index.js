import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <Link to="/">Go back home</Link>
    </>
  )
}

export default NotFound
