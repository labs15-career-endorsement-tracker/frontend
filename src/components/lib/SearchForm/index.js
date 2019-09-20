import React from "react";

import { Form, FormField, FormButton } from "../index"

import './index.scss'

const SearchForm = ({type="text", name, labelText, placeholderText, submitHandler = () => {console.log("Don't forget to send me a submit handler as a prop!")}}) => {
    return (
        <div className="search-form">
            <Form
            title=""
            prompt=""
            redirectTo=""
            redirectText="">
                <FormField
                    type="text"
                    name={name}
                    labelText={labelText}
                    placeholderText={placeholderText}
                ></FormField>
                <FormButton type="submit" onClick={submitHandler}><i className="fas fa-search"></i></FormButton>
            </Form>
        </div>
    )
}

export default SearchForm
