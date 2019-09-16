import {
  object as validateObject,
  string as validateString,
  ref as getRef
} from "yup"

export const mapPropsToValues = ({ password, confirmPassword }) => ({
  password: password || "",
  confirmPassword: confirmPassword || ""
})

export const validationSchema = validateObject().shape({
  password: validateString()
    .min(8, "Your password must be more than 8 characters")
    .max(128, "Your password must be less than 128 characters")
    .required("Please enter a new password"),
  confirmPassword: validateString().oneOf(
    [getRef("password"), null],
    "Passwords must match"
  )
})
