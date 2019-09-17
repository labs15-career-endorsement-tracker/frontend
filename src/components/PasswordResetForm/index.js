import React from "react"
import { withFormik } from "formik"
import queryString from "query-string"
import { history } from "../../store"

import { mapPropsToValues, validationSchema } from "./schema"
import { FormLayout, Form, FormField, FormButton } from "../lib"
import { handleSubmit } from "./utils"

const ResetPasswordForm = ({ isSubmitting }) => {
  const key = queryString.parse(history.location.search)
  const authToken = key.token
  return (
    <FormLayout image={{ url: "", altText: "" }}>
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
      </Form>
      <FormButton disabled={isSubmitting} type="submit">
        Reset
      </FormButton>
    </FormLayout>
  )
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Reset Password"
})(ResetPasswordForm)
