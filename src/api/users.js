import { requestWithAuth } from "./config"

export const addUser = async userData => {
  const { data } = await requestWithAuth().post("/users", userData)
  return data
}

export const getUserById = async (authToken, userId) => {
  const { data } = await requestWithAuth(authToken).get(`/users/${userId}`)
  return data
}
