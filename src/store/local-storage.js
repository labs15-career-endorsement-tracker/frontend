import { history } from "../store"

export const saveToLocalStorage = (key, data) => {
  try {
    const dataString = JSON.stringify(data)
    localStorage.setItem(key, dataString)
  } catch (error) {
    //   TODO: Dispatch this error
    console.log(error)
  }
}

export const loadFromLocalStorage = key => {
  try {
    const dataString = localStorage.getItem(key)
    return JSON.parse(dataString)
  } catch (error) {
    //   TODO: Dispatch this error
    console.log(error)
  }
}

export const loadAuthDataFromLocalStorage = () => {
  const authData = loadFromLocalStorage("auth")

  if (!authData || !authData.token || !authData.userId) {
    history.push("/auth/sign-in")
    return { token: null, userId: null }
  }

  return authData
}
