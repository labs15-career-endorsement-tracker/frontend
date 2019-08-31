import axios from "axios"

export const SIGNUP_IN_PROGRESS = "SIGNUP_IN_PROGRESS"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"

export const createUser = newUser => dispatch => {
  dispatch({
    type: SIGNUP_IN_PROGRESS
  })
  return axios
    .post("users", newUser)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("userId", res.data.userId)
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
