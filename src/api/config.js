import axios from "axios"

const axiosConfig = {
  baseURL: "/api/v0/"
}

export const request = () => axios.create({ ...axiosConfig })

export const requestWithAuth = authToken =>
  axios.create({
    ...axiosConfig,
    headers: { Authorization: `Bearer ${authToken}` }
  })
