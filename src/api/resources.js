import { requestWithAuth } from "./config"

export const getResources = async (authToken, reqId) => {
  const { data } = await requestWithAuth(authToken).get(`requirements/`)
  return data
}
