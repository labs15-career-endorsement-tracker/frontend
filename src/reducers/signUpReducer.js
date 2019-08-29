import { SIGNUP_IN_PROGRESS, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions"

const initialState = {
  inProgress: false,
  serverError: {}
}

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_IN_PROGRESS:
      return {
        ...state,
        inProgress: true
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        inProgress: false
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        inProgress: false,
        serverError: action.payload
      }
    default:
      return state
  }
}
