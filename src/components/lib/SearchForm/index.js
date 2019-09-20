import React from "react";
import { withFormik } from "formik"

import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit } from "./utils"

import { Form, FormField, FormButton } from "../index"

import './index.scss'

const SearchForm = () => {
    return (
        <div className="search-form">

            <Form
                title=""
                prompt=""
                redirectTo=""
                redirectText=""
            >
                <FormField
                    type="text"
                    name="search"
                    labelText=""
                    placeholderText="e.g. bob"
                ></FormField>
                <FormButton type="submit"><i className="fas fa-search"></i></FormButton>
            </Form>
        </div>
    )
}


export default withFormik({
    mapPropsToValues,
    validationSchema,
    handleSubmit,
    displayName: "Forgot your password?"
})(SearchForm)