import axios from "axios"

import { configureBaseUrl } from "./utils"

import { history, clearAuthDataFromLocalStorage } from "../store"

const { REACT_APP_STAGE, REACT_APP_LOCAL_API_PORT } = process.env

const axiosConfig = {
  baseURL: configureBaseUrl(REACT_APP_STAGE, REACT_APP_LOCAL_API_PORT)
}

export const requestWithAuth = authToken => {
  const instance = axios.create({
    ...axiosConfig,
    headers: { Authorization: `Bearer ${authToken}` }
  })
  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        if (history.location.pathname === "/auth/reset-password") {
          history.push("/auth/sign-up")
        } else {
          history.push("/auth/sign-in")
        }
        clearAuthDataFromLocalStorage()
      }
      return Promise.reject(error)
    }
  )
  return instance
}
