import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { createUser } from "../actions"
import axios from "axios"

import '../styles/index.scss'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

const SignUp = props => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    tracks_id: 0,
    email: "",
    password: "",
    confirm_password: ""
  })
  const [formError, setFormError] = useState({
    first_name_error: "",
    last_name_error: "",
    tracks_id_error: "",
    email_error: "",
    password_error: "",
    confirm_password_error: ""
  })
  const [tracks, setTracks] = useState([])

  const newUserHandler = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v0/tracks")
      .then(res => setTracks(res.data))
  }, [])

  const validate = () => {
    let first_name_error = ""
    let last_name_error = ""
    let tracks_id_error = ""
    let email_error = ""
    let password_error = ""
    let confirm_password_error = ""

    if (!newUser.first_name) {
      first_name_error = "First Name is required"
    }
    if (!newUser.last_name) {
      last_name_error = "Last name is required"
    }
    if (newUser.tracks_id === 0) {
      tracks_id_error = "Please select a track"
    }
    if (!emailRegex.test(newUser.email)) {
      email_error = "Must be a valid email address"
    }
    if (newUser.password.length < 8 || newUser.password.length > 16) {
      password_error = "Password must be 8 to 16 characters"
    }
    if (newUser.confirm_password !== newUser.password) {
      confirm_password_error = "Password must match"
    }

    if (
      first_name_error ||
      last_name_error ||
      tracks_id_error ||
      email_error ||
      password_error ||
      confirm_password_error
    ) {
      setFormError({
        first_name_error,
        last_name_error,
        tracks_id_error,
        email_error,
        password_error,
        confirm_password_error
      })
      return false
    }

    return true
  }

  const handleSubmit = e => {
    e.preventDefault()
    const userData = {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      tracks_id: newUser.tracks_id,
      email: newUser.email,
      password: newUser.password
    }
    console.log(userData)
    const valid = validate()
    if (valid) {
      props.createUser(userData)

      setNewUser({
        first_name: "",
        last_name: "",
        tracks_id: 0,
        email: "",
        password: "",
        confirm_password: ""
      })
      setFormError({
        first_name_error: "",
        last_name_error: "",
        tracks_id_error: "",
        email_error: "",
        password_error: "",
        confirm_password_error: ""
      })
    }
  }

  return (
    <div className='form-container'>
      <form noValidate onSubmit={handleSubmit}>
        <h2 className ='form-title' >Sign Up</h2>
        <div className='form-input-wrap'>
          <input
          className='form-input'
          name="first_name"
          value={newUser.first_name}
          type="text"
          noValidate
          onChange={newUserHandler}
          placeholder="First Name"
        />
        </div>
        <span className='form-error'>{formError.first_name_error}</span>
        <div className='form-input-wrap'>
          <input
          className='form-input'
          name="last_name"
          value={newUser.last_name}
          type="text"
          noValidate
          onChange={newUserHandler}
          placeholder="Last Name"
        />
        </div>
        <span className='form-error'>{formError.last_name_error}</span>
        <div className='form-input-wrap'>
          <select
          id='selector'
          className='form-input'
          name="tracks_id"
          value={newUser.tracks_id}
          noValidate
          onChange={newUserHandler}
        >
          <option value={0}>Select track:</option>
            {tracks.map(track => {
              return (
                <option key={track.id} value={(track.id)}>
                  {track.title}
                </option>
              )
            })}
          </select>
        </div>
        <span className='form-error'>{formError.tracks_id_error}</span>
        <div className='form-input-wrap'>
          <input
          className='form-input'
          name="email"
          value={newUser.email}
          type="email"
          noValidate
          onChange={newUserHandler}
          placeholder="Email"
        />
        </div>
        <span className='form-error'>{formError.email_error}</span>
        <div className='form-input-wrap'>
          <input
          className='form-input'
          name="password"
          value={newUser.password}
          type="password"
          noValidate
          onChange={newUserHandler}
          placeholder="Password"
        />
        </div>
        <span className='form-error'>{formError.password_error}</span>
        <div className='form-input-wrap'>
          <input
          className='form-input'
          name="confirm_password"
          value={newUser.confirm_password}
          type="password"
          noValidate
          onChange={newUserHandler}
          placeholder="Confirm Password"
        />
        </div>
        <span className='form-error'>{formError.confirm_password_error}</span>
        <div className='form-btn'>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
    )
}

const mapStateToProps = state => {
  return {
    inProgress: state.signUpReducer.inProgress
  }
}

export default connect(
  mapStateToProps,
  { createUser }
)(SignUp)
