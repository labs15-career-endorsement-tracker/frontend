import React from "react";

import { Form, FormField, FormButton } from "../index"

import './index.scss'

const SearchForm = ({type="text", name, labelText, placeholderText}) => {
    return (
        <div className="search-form">
            <Form>
                <FormField
                    type="text"
                    name={name}
                    labelText={labelText}
                    placeholderText={placeholderText}
                ></FormField>
                <FormButton type="submit"><i className="fas fa-search"></i></FormButton>
            </Form>
        </div>
    )
}

export default SearchForm
