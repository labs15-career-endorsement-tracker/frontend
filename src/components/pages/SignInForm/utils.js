import { toast } from "react-toastify"

import { loginUser } from "../../../api"
import { history, saveToLocalStorage } from "../../../store"

export const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    const { token, userId, isDefaultPassword, isAdmin } = await loginUser(
      values
    )
    saveToLocalStorage("auth", { token, userId })
    resetForm()
    history.push("/")
    if (isDefaultPassword && isAdmin) {
      toast(`Please update your password.`)
    }
  } catch (error) {
    const status = error.response && error.response.status
    switch (status) {
      case 401:
        toast("Incorrect email and/or password!")
        break
      default:
        toast(`Looks like our server just broke. Please try again later.`)
    }
  }

  setSubmitting(false)
}
