import { request } from "./config"

export const getTracks = async () => {
  const { data } = await request().get("/tracks")
  return data
}
