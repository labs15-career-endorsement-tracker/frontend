import React from "react"
import { withFormik } from "formik"

import heroImg from "../../assets/images/alien.png"

import { mapPropsToValues, validationSchema } from "./schema"
import { FormLayout, Form, FormField, FormButton } from "../lib"
import { handleSubmit } from "./utils"

const ResetPasswordForm = ({ isSubmitting }) => {
  return (
    <FormLayout
      image={{ url: heroImg, altText: "An alien hiding behind a planet." }}
    >
      <Form title="Reset your password" prompt="Enter a new password">
        <FormField
          type="password"
          name="password"
          labelText="Enter your password"
          placeholderText="enter new password"
        ></FormField>
        <FormField
          type="password"
          name="confirmPassword"
          labelText="Confirm your password"
          placeholderText="enter new password again"
        ></FormField>
        <FormButton disabled={isSubmitting} type="submit">
          Reset
        </FormButton>
      </Form>
    </FormLayout>
  )
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Reset Password"
})(ResetPasswordForm)
