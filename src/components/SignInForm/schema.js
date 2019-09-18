import { object as validateObject, string as validateString } from "yup"

export const mapPropsToValues = ({ email, password }) => ({
  email: email || "",
  password: password || ""
})

export const validationSchema = validateObject().shape({
  email: validateString()
    .email("Please enter a valid email address")
    .required("We need your email to verify it's really you"),
  password: validateString()	
    .min(8, "Your password must be more than 8 characters")	
    .max(255, "Your password must be less than than 255 characters")	
    .required("Please enter your password")
})
