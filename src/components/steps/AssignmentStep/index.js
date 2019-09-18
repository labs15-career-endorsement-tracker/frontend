import React from "react"

import FormField from "../../lib/FormField"
import FormButton from "../../lib/FormButton"
import Form from "../../lib/Form"
import { withFormik } from "formik"


import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit } from "./utils"

const AssignmentStep = ({ }) => {
    return (
        <div className="each-step">
            <div className="assignment-circle">
                <i className="fas fa-plus-circle"></i>
            </div>

            <Form noValidate
                title=""
                prompt=""
                redirectTo=""
                redirectText="">
                <FormField
                    name="url"
                    labelText="Enter your assignment url"
                    placeholderText="e.g.  https://resume.creddle.io/resume/your-resume" />
                <FormButton type="submit">Submit</FormButton>
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

