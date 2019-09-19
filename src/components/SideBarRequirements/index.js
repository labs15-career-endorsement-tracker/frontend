import React from "react"
import { withFormik } from "formik"
import "./index.scss"

import { Form, SelectFormField } from "../lib"
import { handleSubmit, formatRequirements } from "./utils"

const SideBarRequirements = ({ handleSubmit, requirements }) => {
  return (
    <div className="sidebar-requirements-container">
      <h1>Requirements</h1>
      <Form>
        <SelectFormField
          name="requirements"
          labelText="Select a requirement"
          options={formatRequirements(requirements)}
        ></SelectFormField>
      </Form>
    </div>
  )
}

export default withFormik({ handleSubmit })(SideBarRequirements)
