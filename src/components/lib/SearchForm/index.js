import React from "react";

import { Form, FormField, FormButton } from "../index"

import './index.scss'

const SearchForm = () => {
    return (
        <div className="search-form">
            <Form>
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

export default SearchForm
