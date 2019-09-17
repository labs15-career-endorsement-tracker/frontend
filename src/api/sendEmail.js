import { requestWithAuth} from "./config"

export const sendEmail = async (userInfo) => {
  const { data } = await requestWithAuth().post("/reset-password", userInfo)
  return data
}