import {
  object as validateObject,
  string as validateString,
  ref as getRef
} from "yup"

export const mapPropsToValues = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  track
}) => ({
  firstName: firstName || "",
  lastName: lastName || "",
  email: email || "",
  password: password || "",
  confirmPassword: confirmPassword || "",
  track: track || ""
})

export const validationSchema = validateObject().shape({
  firstName: validateString().required("Please enter your first name"),
  lastName: validateString().required("Please enter your last name"),
  email: validateString()
    .email("Please enter a valid email address")
    .required("We need your email to verify it's really you"),
  password: validateString()
    .min(8, "Your password must be more than 8 characters")
    .max(255, "Your password must be less than than 255 characters")
    .required("Please enter your password"),
  confirmPassword: validateString().oneOf(
    [getRef("password"), null],
    "Passwords must match"
  ),
  track: validateString().required("Please select a track")
})
