import { toast } from "react-toastify"

import { history } from "../../../store"

import { searchAll } from "../../../api"

import {loadAuthDataFromLocalStorage} from "../../../store"

export const handleSubmit = async ({ search }, { setSubmitting, resetForm }) => {
    const {token} = loadAuthDataFromLocalStorage();
  const data = searchAll(token, search);
  console.log(data)
  setSubmitting(false)
}
