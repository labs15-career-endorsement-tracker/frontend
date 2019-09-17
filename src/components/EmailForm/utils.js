import { toast } from "react-toastify"

// import { addUser } from "../../api"
import { history, saveToLocalStorage } from "../../store"

import {sendEmail} from "../../api"

export const handleSubmit = async (
  { email},
  { setSubmitting, resetForm }
) => {
  try {
    const userData = {
      email,
    }
    const { data} = await sendEmail(userData)
    console.log(data)
    resetForm()
    // history.push("/")
  } catch (error) {
    const { status } = error.response
    switch (status) {
      case 400:
        toast("We didn't understand that request. Please try again.")
        break
      case 401:
        toast("Sorry, it looks like you don't have an account, you should sign up")
        break
      default:
        toast(`Looks like our server just broke. Please try again later.`)
    }
  }

  setSubmitting(false)
}