import axios from "axios";

export const REQUIREMENT_FETCH_IN_PROGRESS = "REQUIREMENT_FETCH_IN_PROGRESS"
export const REQUIREMENT_FETCH_SUCCESS = "REQUIREMENT_FETCH_SUCCESS"
export const REQUIREMENT_FETCH_FAILURE = "REQUIREMENT_FETCH_FAILURE"

export const getRequirements = () => dispatch => {
    dispatch({
        type: REQUIREMENT_FETCH_IN_PROGRESS
    })
    return axios
        .get("http://localhost:5000/api/v0/requirements")
        .then(res => {
            console.log(res)
        })
        .catch(err =>
            dispatch({
                type: REQUIREMENT_FETCH_FAILURE,
                payload: err.response.data
            })
        )
}
