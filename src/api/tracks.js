import { requestWithAuth } from "./config"

export const getTracks = async () => {
  const { data } = await requestWithAuth().get("/tracks")
  return data
}
