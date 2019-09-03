import { getSteps, toggleStepComplete } from "../api"

export const STEP_FETCH_IN_PROGRESS = "STEP_FETCH_IN_PROGRESS"
export const STEP_FETCH_SUCCESS = "STEP_FETCH_SUCCESS"
export const STEP_FETCH_FAILURE = "STEP_FETCH_FAILURE"

export const TOGGLE_STEP_START = "TOGGLE_STEP_START"
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"

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

export const toggleStepCompleteApi = (taskId, stepId, isComplete) => dispatch => {
    dispatch({
      type: TOGGLE_STEP_START
    })
  // console.log("Action: ", isComplete)
    return toggleStepComplete(token, taskId, stepId, isComplete)
      .then(res => {
        dispatch({
          type: TOGGLE_COMPLETE, 
          payload: res
        })
      })
      .catch(err => console.log(err))
}
