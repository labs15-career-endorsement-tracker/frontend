import { getSteps } from "../api"
import { loadAuthDataFromLocalStorage } from "./../store"

export const STEP_FETCH_IN_PROGRESS = "STEP_FETCH_IN_PROGRESS"
export const STEP_FETCH_SUCCESS = "STEP_FETCH_SUCCESS"
export const STEP_FETCH_FAILURE = "STEP_FETCH_FAILURE"

const { token } = loadAuthDataFromLocalStorage()

export const getSteps = stepId => dispatch => {
  dispatch({
    type: STEP_FETCH_IN_PROGRESS
  })
  return getSteps(token, stepId)
    .then(steps => {
      dispatch({
        type: STEP_FETCH_SUCCESS,
        payload: steps
      })
    })
    .catch(err =>
      dispatch({
        type: STEP_FETCH_FAILURE,
        payload: err.response.data
      })
    )
}
