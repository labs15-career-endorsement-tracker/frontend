import { requestWithAuth } from "./config"

export const getRequirements = async authToken => {
  const { data } = await requestWithAuth(authToken).get("/requirements")
  return data
}