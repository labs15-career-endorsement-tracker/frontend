import React from "react"
import { Form as FormikForm } from "formik"

import { FormHeader } from "../index"

const Form = ({ children, ...rest }) => {
  return (
    <>
      <FormHeader {...rest}></FormHeader>
      <FormikForm noValidate>{children}</FormikForm>
    </>
  )
}

export default Form
