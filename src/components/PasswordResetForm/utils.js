import { toast } from "react-toastify"

import { updateUserPassword } from "../../api"
import { history, saveToLocalStorage } from "../../store"

export const handleSubmit = async (
  { password, authToken },
  { setSubmitting, resetForm }
) => {
  try {
    console.log("test")
    const { token, userId } = await updateUserPassword(authToken, password)
    saveToLocalStorage("auth", { token, userId })
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
