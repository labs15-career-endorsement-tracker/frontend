import { request } from "./config"

export const loginUser = async userCreds => {
  const { data } = await request().post("/login", userCreds)
  return data
}
