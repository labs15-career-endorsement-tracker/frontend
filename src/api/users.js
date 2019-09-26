import { requestWithAuth } from "./config"

export const addUser = async userData => {
  const { data } = await requestWithAuth().post("/users", userData)
  return data
}

export const getUserById = async (authToken, userId) => {
  const { data } = await requestWithAuth(authToken).get(`/users/${userId}`)
  return data
}

export const updateUserPassword = async (authToken, password) => {
  const { data } = await requestWithAuth(authToken).put("/users", { password })
  return data
}
export const updateUserCalendly = async (authToken, calendly_link) => {
  const { data } = await requestWithAuth(authToken).put("/users", {
    calendly_link
  })
  return data
}

export const getRequirementsByUserId = async (authToken, userId) => {
  const { data } = await requestWithAuth(authToken).get(
    `/users/${userId}/requirements`
  )
  return data
}

export const deleteUser = async (authToken) => {
  const { data } = await requestWithAuth(authToken).delete('/users')
  return data
}
