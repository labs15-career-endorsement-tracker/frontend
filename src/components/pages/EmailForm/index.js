import React from "react"
import { withFormik } from "formik"

import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit } from "./utils"

import { Form, FormField, FormButton } from "../../lib"

import "./index.scss"

const EmailForm = props => {
  return (
    <>
      {props.location.state && props.location.state.sentEmail && (
        <div className="email-success">
          <p>
            We have sent you an email with instructions for updating your
            password
          </p>
        </div>
      )}
      <Form
        title="Reset Password"
        prompt="Don't need to reset your password?"
        redirectTo="/auth/sign-in"
        redirectText="Sign In"
        instructions="Enter your email and we will email you a password reset link"
      >
        <FormField
          type="email"
          name="email"
          labelText="Enter your email address"
          placeholderText="e.g. bob_ross@happylittlemistakes.com"
        ></FormField>
        <FormButton type="submit">Submit</FormButton>
      </Form>
    </>
  )
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Forgot your password?"
})(EmailForm)
