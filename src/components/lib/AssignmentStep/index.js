import React from "react"

import FormField from "../FormField"
import FormButton from "../FormButton"
import Form from "../Form"
import { withFormik } from "formik"

import "./index.scss"

import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit } from "./utils"

const AssignmentStep = () => {
  return (
    <div className="each-step">
      <div className="check-box">
        <div className={"incomplete"}>
          <i className="fas fa-check"></i>
        </div>
      </div>

      <Form noValidate title="" prompt="" redirectTo="" redirectText="">
        <FormField
          name="url"
          labelText="Enter your assignment url"
          placeholderText="e.g.  https://resume.creddle.io/resume/your-resume"
        />
        <FormButton type="submit">
          <i className="fas fa-upload"></i>
        </FormButton>
      </Form>
    </div>
  )
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Assignment Step"
})(AssignmentStep)
