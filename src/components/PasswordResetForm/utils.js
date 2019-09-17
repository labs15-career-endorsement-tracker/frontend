import { toast } from "react-toastify"

import { updateUserPassword } from "../../api"
import queryString from "query-string"
import { history } from "../../store"

export const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    const key = queryString.parse(history.location.search)
    const authToken = key.token
    await updateUserPassword(authToken, values.password)
    resetForm()
    history.push("/sign-in")
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
