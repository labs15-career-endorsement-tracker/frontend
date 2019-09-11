import axios from "axios"

import { configureBaseUrl } from "./utils"

import {history} from "../store"

const { REACT_APP_STAGE, REACT_APP_LOCAL_API_PORT } = process.env

const axiosConfig = {
  baseURL: configureBaseUrl(REACT_APP_STAGE, REACT_APP_LOCAL_API_PORT)
}

// export const request = () => axios.create({ ...axiosConfig })

export const requestWithAuth = authToken => {
  const instance = axios.create({
    ...axiosConfig,
    headers: { Authorization: `Bearer ${authToken}` }})

  instance.interceptors.response.use(response => response, error => {
      if (error.response.status === 401) {
        history.push('/sign-in')
      }
      return error
    })
    return instance;
}





