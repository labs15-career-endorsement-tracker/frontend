import {
  REQUIREMENT_FETCH_IN_PROGRESS,
  REQUIREMENT_FETCH_SUCCESS,
  REQUIREMENT_FETCH_FAILURE
} from "../actions"

const initialState = {
  inProgress: false,
  requirements: [],
  serverError: {},
  isServerError: false
}

export const requirementReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUIREMENT_FETCH_IN_PROGRESS:
      return {
        ...state,
        inProgress: true
      }
    case REQUIREMENT_FETCH_SUCCESS:
      return {
        ...state,
        inProgress: false,
        requirements: action.payload
      }
    case REQUIREMENT_FETCH_FAILURE:
      return {
        ...state,
        inProgress: false,
        isServerError: true,
        serverError: action.payload
      }
    default:
      return state
  }
}
