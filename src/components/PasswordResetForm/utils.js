import { toast } from "react-toastify"

import { updateUserPassword } from "../../api"
import { history } from "../../store"

export const handleSubmit = async (
  { password, authToken },
  { setSubmitting, resetForm }
) => {
  try {
    await updateUserPassword(authToken, password)
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
