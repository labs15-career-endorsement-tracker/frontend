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
            localStorage.setItem("token", res.data.token)
            console.log(creds, res.data)
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
      <h1 className="brand">ENDRSD</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email address</label>
        <input
          name="email"
          onChange={handleChange}
          placeholder="email address"
          type="text"
          value={creds.email}
          required
        />
        <label htmlFor="password">password</label>
        <input
          name="password"
          onChange={handleChange}
          placeholder="password"
          type="password"
          value={creds.password}
          required
        />
        <button className="btn">Login</button>
        <p className="forgot">Forgot password?</p>
      </form>
    </div>
  )
}

export default Login
