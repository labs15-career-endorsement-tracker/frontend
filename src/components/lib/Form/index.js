import React from "react"
import { Form as FormikForm } from "formik"

import { FormHeader } from "../index"
import FormInstructions from "../FormInstructions"

const Form = ({ children, ...rest }) => {
  return (
    <>
      <FormHeader {...rest}></FormHeader>
      {rest.instructions && rest.instructions.length && (
        <FormInstructions text={rest.instructions} />
      )}
      <FormikForm noValidate>{children}</FormikForm>
    </>
  )
}

export default Form
