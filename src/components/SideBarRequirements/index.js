import React from "react"
import { withFormik } from "formik"
import "./index.scss"

import { Form, SelectFormField } from "../lib"
import { handleSubmit, formatRequirements } from "./utils"

const SideBarRequirements = ({ requirements }) => {
  const styles = {
    background: "red"
  }

  return (
    <div className="sidebar-requirements-container">
      <Form>
        <SelectFormField
          name="requirements"
          labelText=""
          options={formatRequirements(requirements)}
          styles={styles}
        ></SelectFormField>
      </Form>
    </div>
  )
}

export default withFormik({ handleSubmit })(SideBarRequirements)
