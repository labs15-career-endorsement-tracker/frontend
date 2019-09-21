import { requestWithAuth } from "./config"
import { loadAuthDataFromLocalStorage } from "../../src/store"

export const searchAll = async query => {
  const { token } = loadAuthDataFromLocalStorage()
  const { data } = await requestWithAuth(token).get(`/users?search=${query}`)
  return data
}
