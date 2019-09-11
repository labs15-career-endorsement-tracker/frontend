import { requestWithAuth } from "./config"

export const loginUser = async userCreds => {
  const { data } = await requestWithAuth().post("/login", userCreds)
  return data
}
