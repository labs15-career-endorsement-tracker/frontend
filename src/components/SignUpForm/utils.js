import { toast } from "react-toastify"

import { addUser } from "../../api"
import { history, saveToLocalStorage } from "../../store"

export const handleSubmit = async (
  { firstName, lastName, email, password, track },
  { setSubmitting, resetForm }
) => {
  try {
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      tracks_id: track
    }
    const { token, userId } = await addUser(userData)
    saveToLocalStorage("auth", { token, userId })
    resetForm()
    history.push("/")
  } catch (error) {
    const { status } = error.response
    switch (status) {
      case 400:
        toast("We didn't understand that request. Please try again.")
        break
      case 409:
        toast("Looks like you already have an account. Try signing in.")
        break
      default:
        toast(`Looks like our server just broke. Please try again later.`)
    }
  }

  setSubmitting(false)
}

export const formatTracks = arr => {
  if (!arr || !arr.length) return []
  return arr.map(({ id, title }) => ({
    value: id,
    label: title
  }))
}
