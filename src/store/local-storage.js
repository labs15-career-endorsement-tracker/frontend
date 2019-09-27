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
    return { token: null, userId: null }
  }

  return authData
}

export const clearAuthDataFromLocalStorage = () => {
  try {
    const dataString = JSON.stringify({ token: null, userId: null })
    localStorage.setItem("auth", dataString)
  } catch (error) {
    //   TODO: Dispatch this error
    console.log(error)
  }
}
