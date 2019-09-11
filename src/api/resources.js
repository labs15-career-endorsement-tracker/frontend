import { requestWithAuth } from "./config"

export const getResources = async (authToken, reqId) => {
  const { data } = await requestWithAuth(authToken, reqId).get(`requirements/`)
  return data && data.length ? data.filter(requirement => requirement.id === reqId) : data
}
