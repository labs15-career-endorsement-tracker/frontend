import { getSteps, toggleStepComplete } from "../api"

export const STEP_FETCH_IN_PROGRESS = "STEP_FETCH_IN_PROGRESS"
export const STEP_FETCH_SUCCESS = "STEP_FETCH_SUCCESS"
export const STEP_FETCH_FAILURE = "STEP_FETCH_FAILURE"

const token = localStorage.getItem("token")

export const getStepsByTaskId = taskId => dispatch => {
      dispatch({
          type: STEP_FETCH_IN_PROGRESS
      })
      return getSteps(token, taskId)
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
            }))
}

export const toggleStepCompleteApi = (taskId, stepId, isComplete) => {
  console.log(isComplete)
  return toggleStepComplete(token, taskId, stepId, isComplete)
}
