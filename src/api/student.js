import { requestWithAuth } from "./config"
import {loadAuthDataFromLocalStorage} from "../store"

export const toggleStudent = async (authToken, userId) => {
  const { data } = await requestWithAuth(authToken).put(`students/${userId}`)
  return data
}

export const getPinnedStudents = async () => {
  const {token} = loadAuthDataFromLocalStorage()
  const { data } = await requestWithAuth(token).get(`students`)
  return data
}