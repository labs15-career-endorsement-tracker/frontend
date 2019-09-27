import { object as validateObject, string as validateString } from "yup"

export const mapPropsToValues = ({ url }) => ({
  url: url || ""
})

export const validationSchema = validateObject().shape({
  url: validateString()
    .required("Enter a url for your assignment")
    .url("Please enter a valid url")
})
