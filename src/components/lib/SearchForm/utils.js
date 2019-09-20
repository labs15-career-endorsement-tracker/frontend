import { toast } from "react-toastify"

import { history } from "../../../store"

import { sendEmail } from "../../../api"

export const handleSubmit = async ({ search }, { setSubmitting, resetForm }) => {
  
  setSubmitting(false)
}
