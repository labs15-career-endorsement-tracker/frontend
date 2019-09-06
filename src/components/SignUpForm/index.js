import React, { useEffect, useState } from "react"
import { withFormik } from "formik"

import heroImg from "../../assets/images/alien.png"

import { getTracks } from "../../api"
import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit, formatTracks } from "./utils"

import {
  FormLayout,
  Form,
  FormField,
  SelectFormField,
  FormButton
} from "../lib"

const SignUpForm = ({ isSubmitting }) => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    ;(async function() {
      const result = await getTracks()
      setTracks(result)
    })()
  }, [])

  return (
    <FormLayout
      image={{ url: heroImg, altText: "An alien hiding behind a planet." }}
    >
      <Form
        title="Welcome!"
        prompt="Already have an account?"
        redirectTo="/sign-in"
        redirectText="Sign In!"
      >
        <FormField
          type="text"
          name="firstName"
          labelText="Enter your first name"
          placeholderText="e.g. Bob"
        ></FormField>

        <FormField
          type="text"
          name="lastName"
          labelText="Enter your last name"
          placeholderText="e.g. Ross"
        ></FormField>

        <FormField
          type="email"
          name="email"
          labelText="Enter your email address"
          placeholderText="e.g. bob_ross@happylittlemistakes.com"
        ></FormField>

        <FormField
          type="password"
          name="password"
          labelText="Enter your password"
          placeholderText="e.g. Password1234!"
        ></FormField>

        <FormField
          type="password"
          name="confirmPassword"
          labelText="Confirm your password"
          placeholderText="e.g. Password1234!"
        ></FormField>

        <SelectFormField
          name="track"
          labelText="Select your track"
          options={formatTracks(tracks)}
        ></SelectFormField>

        <FormButton disabled={isSubmitting} type="submit">
          Sign Up!
        </FormButton>
      </Form>
    </FormLayout>
  )
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Sign Up"
})(SignUpForm)
