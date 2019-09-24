import { requestWithAuth } from "./config"

export const toggleStudent = async (authToken, userId) => {
  const { data } = await requestWithAuth(authToken).put(`students/${userId}`)
  return data
}
