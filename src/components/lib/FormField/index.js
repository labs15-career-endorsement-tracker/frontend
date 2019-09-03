import React, { useState } from "react"
import { Field, ErrorMessage } from "formik"
import uuid from "uuid/v4"

import "./index.scss"

const FormField = ({
  type = "text",
  name = "",
  labelText = "",
  placeholderText = ""
}) => {
  const [id] = useState(() => uuid())

  return (
    <div className="form-field">
      <label htmlFor={id}>{labelText}</label>
      <Field
        type={type}
        name={name}
        id={id}
        placeholder={placeholderText}
      ></Field>
      <span className="feedback feedback-error">
        <ErrorMessage name={name}></ErrorMessage>
      </span>
    </div>
  )
}

export default FormField
