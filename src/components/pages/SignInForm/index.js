import React from "react"
import { withFormik } from "formik"

import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit } from "./utils"

import { Form, FormField, FormButton } from "../../lib"

import { Link } from "react-router-dom"

const SignInForm = ({ isSubmitting, values }) => {
  return (
    <Form
      title="Welcome back!"
      prompt="Don't have an account yet?"
      redirectTo="/auth/sign-up"
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
      <FormButton disabled={isSubmitting} type="submit">
        Sign In!
      </FormButton>
      <Link
      className="forgot-password"
        to={{
          pathname: "/auth/reset-password",
          state: { email: values.email }
        }}
      >
        Forgot Your Password?
      </Link>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Sign In"
})(SignInForm)
