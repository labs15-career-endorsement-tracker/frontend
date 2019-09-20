import { object as validateObject, string as validateString } from "yup"

export const mapPropsToValues = ({ search }) => ({
  search: search
})

export const validationSchema = validateObject().shape({
  search: validateString()
    .required("We need a value to search for")
})
