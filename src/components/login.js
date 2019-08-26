import React, { useState } from "react"
import axios from "axios"

import "../styles/login.css"

const Login = () => {
  const useLoginForm = () => {
    const [creds, setCreds] = useState({})
    const handleSubmit = e => {
      if (e) {
        e.preventDefault()
        axios
          .post("/api/v0/login", creds)
          .then(res => {
            console.log(creds, res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
    const handleChange = e => {
      e.persist()
      setCreds(creds => ({
        ...creds,
        [e.target.name]: e.target.value
      }))
    }
    return {
      handleSubmit,
      handleChange,
      creds
    }
  }

  const { creds, handleSubmit, handleChange } = useLoginForm()

  return (
    <div className="form-container">
      <h1>ENDRSD</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          placeholder="email address"
          type="text"
          value={creds.email}
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="password"
          type="password"
          value={creds.password}
        />
        <button>Login</button>
        <p className="forgot">Forgot password?</p>
      </form>
    </div>
  )
}

export default Login
