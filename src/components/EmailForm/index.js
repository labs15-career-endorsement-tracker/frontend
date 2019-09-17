import React from "react"
import { withFormik } from "formik"

import heroImg from "../../assets/images/alien.png"

import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit } from "./utils"

import { FormLayout, Form, FormField, FormButton } from "../lib"

import './index.scss'

const EmailForm
  = (props) => {
    return (
      <FormLayout
        image={{ url: heroImg, altText: "An alien hiding behind a planet." }}
      >
        {props.location.state.sentEmail && <div className="email-success"><p>We have sent you a password reset email</p></div>}
        <Form
          title="Reset Password"
          prompt="Don't need to reset your password?"
          redirectTo="/sign-in"
          redirectText="Sign In"
          instructions="Enter your email and we will email you a password reset link"
        >
          <FormField
            type="email"
            name="email"
            labelText="Enter your email address"
            placeholderText="e.g. bob_ross@happylittlemistakes.com"
          ></FormField>
          <FormButton type="submit">
            Submit
        </FormButton>
        </Form>
      </FormLayout>
    )
  }

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Forgot your password?"
})(EmailForm
)