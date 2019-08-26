import React, { useState } from "react"

const Login = () => {
  const [creds, setLogin] = useState({
    email: "",
    password: ""
  })

  const inputHandler = e => {
    setLogin({
      ...creds,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        onChange={inputHandler}
        placeholder="email address"
        type="text"
        value={creds.email}
      />
      <input
        name="password"
        onChange={inputHandler}
        placeholder="password"
        type="password"
        value={creds.password}
      />
      <button>Register</button>
    </form>
  )
}

export default Login
