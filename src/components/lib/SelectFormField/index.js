import React, { useState } from "react"
import { Field, ErrorMessage } from "formik"
import Select from "react-select"
import uuid from "uuid/v4"

const styles = {
  control: provided => ({
    ...provided,
    border: "none",
    borderBottom: "0.4rem solid #104753",
    borderRadius: "none"
  })
}

const SelectField = ({ options, field, form }) => (
  <Select
    options={options}
    name={field.name}
    value={options ? options.find(option => option.value === field.value) : ""}
    onChange={option => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
    styles={styles}
  />
)

const SelectFormField = ({ name = "", labelText = "", options = [] }) => {
  const [id] = useState(uuid())
  return (
    <div className="form-field">
      <label htmlFor={id}>{labelText}</label>
      <Field
        id={id}
        name={name}
        component={SelectField}
        options={options}
      ></Field>
      <ErrorMessage name={name}></ErrorMessage>
    </div>
  )
}

export default SelectFormField
