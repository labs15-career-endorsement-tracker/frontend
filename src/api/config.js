import axios from "axios"

import { configureBaseUrl } from "./utils"

const { REACT_APP_STAGE, REACT_APP_LOCAL_API_PORT } = process.env

const axiosConfig = {
  baseURL: configureBaseUrl(REACT_APP_STAGE, REACT_APP_LOCAL_API_PORT)
}

export const request = () => axios.create({ ...axiosConfig })

export const requestWithAuth = authToken =>
  axios.create({
    ...axiosConfig,
    headers: { Authorization: `Bearer ${authToken}` }
  })
