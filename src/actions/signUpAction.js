import { addUser } from "../api"

export const SIGNUP_IN_PROGRESS = "SIGNUP_IN_PROGRESS"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"

export const createUser = newUser => dispatch => {
  dispatch({
    type: SIGNUP_IN_PROGRESS
  })
  return addUser(newUser)
    .then(({ token, userId }) => {
      localStorage.setItem("token", token)
      localStorage.setItem("userId", userId)
      dispatch({
        type: SIGNUP_SUCCESS
      })
    })
    .catch(err =>
      dispatch({
        type: SIGNUP_FAILURE,
        payload: err.response.data
      })
    )
}
