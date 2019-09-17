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
    console.log(status)
    switch (status) {
      default:
        toast(`${status}`)
    }
  }
  setSubmitting(false)
}
