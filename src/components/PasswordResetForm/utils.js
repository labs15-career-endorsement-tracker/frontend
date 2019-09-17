import { toast } from "react-toastify"

import { history } from "../../store"

export const handleSubmit = async ({ password, token }) => {
  try {
    /* todo */
    // call in api function to send put to the server
    // redirect from history to the sign-in page
    // formik reset form ()
  } catch (error) {
    const { status } = error.response
    console.log(status)
  }
}
