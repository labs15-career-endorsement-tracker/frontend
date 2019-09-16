import React, { useEffect, useState } from "react"
import { withFormik } from "formik"

import { mapPropsToValues, validationSchema } from "./schema"

import { FormLayout, Form, FormField, FormButton } from "../lib"
import { handleSubmit } from "./utils"

const ResetPasswordForm = ({ isSubmitting }) => {
  return (
    <FormLayout>
      <Form
        title="Reset your password"
        prompt="Forgot your password?"
        redirectTo="/sign-in"
        redirectText="Change password"
      >
        <FormField
          type="password"
          name="password"
          labelText="Enter your password"
          placeholderText="enter password"
        ></FormField>
        <FormField
          type="password"
          name="confirmPassword"
          labelText="Confirm your password"
          placeholderText="re-enter password"
        ></FormField>
      </Form>
      <FormButton disabled={isSubmitting} type="submit">
        Reset password
      </FormButton>
    </FormLayout>
  )
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Reset password"
})(ResetPasswordForm)
