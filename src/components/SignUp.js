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
  const [serverError, setServerError] = useState({ message: '', name: '', statusCode: ''})

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

  useEffect(() => {
    setServerError(props.serverError)
  }, [props.serverError])
  // console.log(serverError.response)
  

  const validate = () => {
    let first_name_error = ""
    let last_name_error = ""
    let tracks_id_error = ""
    let email_error = ""
    let password_error = ""
    let confirm_password_error = ""

    if (!newUser.first_name) {
      first_name_error = " is required"
    }
    if (!newUser.last_name) {
      last_name_error = " is required"
    }
    if (newUser.tracks_id === 0) {
      tracks_id_error = " Please select a track"
    }
    if (!emailRegex.test(newUser.email)) {
      email_error = " address must be valid"
    }
    if (newUser.password.length < 8 || newUser.password.length > 16) {
      password_error = " must be 8 to 16 characters"
    }
    if (newUser.confirm_password !== newUser.password) {
      confirm_password_error = " must match"
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
    <div className='form-con-wrapper'>
        <div className={serverError ? 'server-error active' : 'server-error active'}>
          <p>Server Error:</p>
          <p>Type: {serverError.name}</p>
          <p>Code: {serverError.statusCode}</p>
          <p>Message: {serverError.message}</p>
        </div>
        <div className='signUp-form-container'>
        <form 
          noValidate 
          onSubmit={handleSubmit}>
          <h2 className ='title'>Sign Up</h2>
          <div className='form-input-wrap'>
            <label className='form-label'>First Name<span className='form-error'>{formError.first_name_error}</span></label>
            <input
            className='form-input'
            name="first_name"
            value={newUser.first_name}
            type="text"
            noValidate
            onChange={newUserHandler}
          />
          </div>
          
          <div className='form-input-wrap'>
            <label className='form-label'>Last Name<span className='form-error'>{formError.last_name_error}</span></label>
            <input
            className='form-input'
            name="last_name"
            value={newUser.last_name}
            type="text"
            noValidate
            onChange={newUserHandler}
          />
          </div>
          
          <div className='form-input-wrap'>
            <label className='form-label'>Select track<span className='form-error'>{formError.tracks_id_error}</span></label>
            <select
            id='selector'
            className='form-input'
            name="tracks_id"
            value={newUser.tracks_id}
            noValidate
            onChange={newUserHandler}
          >
            <option value={0}></option>
              {tracks.map(track => {
                return (
                  <option key={track.id} value={(track.id)}>
                    {track.title}
                  </option>
                )
              })}
            </select>
          </div>
          
          <div className='form-input-wrap'>
            <label className='form-label'>Email<span className='form-error'>{formError.email_error}</span></label>
            <input
            className='form-input'
            name="email"
            value={newUser.email}
            type="email"
            noValidate
            onChange={newUserHandler}
          />
          </div>
          
          <div className='form-input-wrap'>
            <label className='form-label'>Password<span className='form-error'>{formError.password_error}</span></label>
            <input
            className='form-input'
            name="password"
            value={newUser.password}
            type="password"
            noValidate
            onChange={newUserHandler}
          />
          </div>
          
          <div className='form-input-wrap'>
            <label className='form-label'>Confirm Password<span className='form-error'>{formError.confirm_password_error}</span></label>
            <input
            className='form-input'
            name="confirm_password"
            value={newUser.confirm_password}
            type="password"
            noValidate
            onChange={newUserHandler}
          />
          </div>
          
          <div className='form-btn'>
            <div className='btn-wrapper'>
              <button className='submit-btn'>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
    )
}

const mapStateToProps = state => {
  return {
    inProgress: state.signUpReducer.inProgress,
    serverError: state.signUpReducer.serverError
  }
}

export default connect(
  mapStateToProps,
  { createUser }
)(SignUp)
