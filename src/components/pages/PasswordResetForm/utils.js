import { toast } from "react-toastify"

import { updateUser } from "../../../api"
import queryString from "query-string"
import { history } from "../../../store"

export const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  const key = queryString.parse(history.location.search)
  const authToken = key.token
  try {
    await updateUser(authToken, values.password)
    resetForm()
    history.push("/auth/sign-in")
  } catch (error) {
    const { status } = error.response
    switch (status) {
      case 404:
        toast(
          "Looks like we couldn't find that resource. Please try again later."
        )
        break
      case 500:
        toast(
          "Looks like we couldn't understand the request. Please try again."
        )
        break
      default:
        toast("Looks like our server just broke. Please try again.")
    }
  }
  setSubmitting(false)
}
