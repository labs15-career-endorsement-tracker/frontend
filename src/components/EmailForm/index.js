import React from "react"
import { withFormik } from "formik"

import heroImg from "../../assets/images/alien.png"

import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit } from "./utils"

import { FormLayout, Form, FormField, FormButton } from "../lib"

const EmailForm
 = ({ isSubmitting }) => {
  return (
    <FormLayout
      image={{ url: heroImg, altText: "An alien hiding behind a planet." }}
    >
     
    </FormLayout>
  )
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Sign In"
})(EmailForm)