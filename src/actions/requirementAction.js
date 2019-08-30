import axios from "axios"

export const REQUIREMENT_FETCH_IN_PROGRESS = "REQUIREMENT_FETCH_IN_PROGRESS"
export const REQUIREMENT_FETCH_SUCCESS = "REQUIREMENT_FETCH_SUCCESS"
export const REQUIREMENT_FETCH_FAILURE = "REQUIREMENT_FETCH_FAILURE"


export const getRequirements = () => dispatch => {

    (function() {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        } else {
            axios.defaults.headers.common['Authorization'] = null;
            /*if setting null does not remove `Authorization` header then try     
            delete axios.defaults.headers.common['Authorization'];
            */
        }
    })();
    
    dispatch({
        type: REQUIREMENT_FETCH_IN_PROGRESS
    })
    return axios
        .get("http://localhost:5000/api/v0/requirements")
        .then(res => {
            console.log(res)
            dispatch({
                type:REQUIREMENT_FETCH_SUCCESS,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: REQUIREMENT_FETCH_FAILURE,
                payload: err.response.data
            })
        )
}
