import { requestWithAuth } from "./config"

export const searchAll = async (token, query) => {
  const  data  = await requestWithAuth(token).get(`/users?search=${query}`)
  return data
}