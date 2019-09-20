import React from "react"

import { withFormik } from "formik"

import { mapPropsToValues, validationSchema } from "./schema"
import { handleSubmit } from "./utils"

import {SearchForm} from "../../lib";
import "./index.scss"

const tempStudents = [
    {
        "first_name": "Bob",
        "last_name": "Ross",
        "email": "bob_ross@gmail.com",
        "tracks_id": 1
    },
    {
        "first_name": "bob",
        "last_name": "ross",
        "email": "bob_ross@happylittlemistakes.com",
        "tracks_id": 1
    },
    {
        "first_name": "Bob",
        "last_name": "Ross",
        "email": "bob_ross@happlittlemistakes.con",
        "tracks_id": 1
    }
]

const FindStudent = () => {
    return (
        <section className="find-student-page">
            <header>
                <h3>Find a Student</h3>
                <p>Search for a student by name</p>
            </header>
            <SearchForm
            ></SearchForm>
            <div>
                Something
            </div>
        </section>
    )
}

// export default FindStudent
export default withFormik({
    mapPropsToValues,
    validationSchema,
    handleSubmit,
    displayName: "Forgot your password?"
})(FindStudent)