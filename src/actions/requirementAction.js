import { getRequirements as getRequirementsApi } from "../api"

export const REQUIREMENT_FETCH_IN_PROGRESS = "REQUIREMENT_FETCH_IN_PROGRESS"
export const REQUIREMENT_FETCH_SUCCESS = "REQUIREMENT_FETCH_SUCCESS"
export const REQUIREMENT_FETCH_FAILURE = "REQUIREMENT_FETCH_FAILURE"

export const getRequirements = () => dispatch => {
  dispatch({
    type: REQUIREMENT_FETCH_IN_PROGRESS
  })
  const token = localStorage.getItem("token")
  return getRequirementsApi(token)
    .then(requirements => {
      dispatch({
        type: REQUIREMENT_FETCH_SUCCESS,
        payload: requirements
      })
    })
    .catch(err =>
      dispatch({
        type: REQUIREMENT_FETCH_FAILURE,
        payload: err.response.data
      }))
}
