import { getRequirements } from "../api"
import { loadAuthDataFromLocalStorage } from "./../store"

export const RESOURCE_FETCH_IN_PROGRESS = "RESOURCE_FETCH_IN_PROGRESS"
export const RESOURCE_FETCH_SUCCESS = "RESOURCE_FETCH_SUCCESS"
export const RESOURCE_FETCH_FAILURE = "RESOURCE_FETCH_FAILURE"

const { token } = loadAuthDataFromLocalStorage()

export const getResources = reqId => dispatch => {
  dispatch({
    type: RESOURCE_FETCH_IN_PROGRESS
  })
  return getRequirements(token, reqId)
    .then(resources => {
      console.log("asldslksadklsadlkasdkl", resources)
      dispatch({
        type: RESOURCE_FETCH_SUCCESS,
        payload: resources
      })
    })
    .catch(err =>
      dispatch({
        type: RESOURCE_FETCH_FAILURE,
        payload: err.response.data
      })
    )
}
