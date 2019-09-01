import { getSteps } from "../api"

export const STEP_FETCH_IN_PROGRESS = "STEP_FETCH_IN_PROGRESS"
export const STEP_FETCH_SUCCESS = "STEP_FETCH_SUCCESS"
export const STEP_FETCH_FAILURE = "STEP_FETCH_FAILURE"

export const getStepsByTaskId = taskId => dispatch => {
      dispatch({
          type: STEP_FETCH_IN_PROGRESS
      })
      const token = localStorage.getItem("token")
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
