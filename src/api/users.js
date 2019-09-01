import { request, requestWithAuth } from "./config"

export const addUser = async userData => {
  const { data } = await request().post("/users", userData)
  return data
}

export const getUserById = async (authToken, userId) => {
  const { data } = await requestWithAuth(authToken).get(`/users`)
  const user = data.find(user => Number(user.id) === Number(userId))

  // TODO: There's no getUserById endpoint server-side so... this
  const error404 = Error("User with that ID does not exist!")
  error404.statusCode = 404

  if (!user) throw error404

  return user
}
