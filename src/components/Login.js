import React, { useState, useEffect } from "react"
import axios from "axios"
import { Formik } from "formik"
import * as Yup from "yup"

import "../styles/index.scss"

const Login = () => {
  const [error, setError] = useState({
    errorCode: "",
    errorMessage: ""
  })

  const handleError = err => {
    setError({
      errorCode: err.response.data.statusCode,
      errorMessage: err.response.data.message
    })
  }

  return (
    <div className="form-container">
      <div className="warning-container">
        {error.errorCode && error.errorMessage ? (
          <div className="warned">
            <h2>Oh no. :/ {error.errorCode}</h2>
            <h6>Server says... {error.errorMessage}!</h6>
          </div>
        ) : null}
      </div>
      <div className="brand">
        <h1>ENDRSD</h1>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          axios
            .post("/api/v0/login", values)
            .then(res => {
              localStorage.setItem("token", res.data.token)
              resetForm()
            })
            .catch(err => {
              setSubmitting(false)
              handleError(err)
              resetForm()
            })
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Please enter a valid email address"),
          password: Yup.string()
            .min(8, "Your password must be more than 8 characters")
            .max(16, "Your password must be less than than 16 characters")
            .required("Please enter your password")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props

          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: "block" }}>
                Email Address
              </label>
              <input
                id="email"
                placeholder="you@email.com"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              <div className="error-container">
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </div>
              <label htmlFor="password" style={{ display: "block" }}>
                Password
              </label>
              <input
                id="password"
                placeholder="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? "text-input error"
                    : "text-input"
                }
              />
              <div className="error-container">
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </div>
              <button type="submit" disabled={isSubmitting}>
                Log In
              </button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Login
