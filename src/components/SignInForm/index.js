import React from "react"
import { withFormik } from "formik"

import heroImg from "../../assets/images/alien.png"

import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit } from "./utils"

import { FormLayout, Form, FormField, FormButton } from "../lib"

import {Link} from "react-router-dom";

const SignInForm = ({ isSubmitting }) => {
  return (
    <FormLayout
      image={{ url: heroImg, altText: "An alien hiding behind a planet." }}
    >
      <Form
        title="Welcome back!"
        prompt="Don't have an account yet?"
        redirectTo="/sign-up"
        redirectText="Create an account!"
      >
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

        <Link to="/reset-password">Forgot Your Password?</Link>
        <FormButton disabled={isSubmitting} type="submit">
          Sign In!
        </FormButton>
      </Form>
    </FormLayout>
  )
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Sign In"
})(SignInForm)
