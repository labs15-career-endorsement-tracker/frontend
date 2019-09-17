import { object as validateObject, string as validateString } from "yup"

export const mapPropsToValues = ({ email, location }) => ({
  email: location.state.email || ""
})

export const validationSchema = validateObject().shape({
  email: validateString()
    .email("Please enter a valid email address")
    .required("We need your email to verify it's really you"),
})