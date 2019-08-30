import axios from 'axios'

export const STEP_FETCH_IN_PROGRESS = "STEP_FETCH_IN_PROGRESS"
export const STEP_FETCH_SUCCESS = "STEP_FETCH_SUCCESS"
export const STEP_FETCH_FAILURE = "STEP_FETCH_FAILURE"

export const getStepsByTaskId = taskId => dispatch => {
    ;(function() {
        const token = localStorage.getItem("token")
        if (token) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + token
        } else {
          axios.defaults.headers.common["Authorization"] = null
          /*if setting null does not remove `Authorization` header then try     
                delete axios.defaults.headers.common['Authorization'];
                */
        }
      })()

      dispatch({
          type: STEP_FETCH_IN_PROGRESS
      })
      return axios
        .get(`http://localhost:5000/api/v0/requirements/${taskId}/steps`)
        .then(res => console.log(res))
        .catch(err =>
            dispatch({
                type: STEP_FETCH_FAILURE,
                payload: err.response.data
            }))
}
