import { fetchUser } from "../actions"

const initialState = {
  inProgress: false,
  serverError: {},
  isServerError: false,
  user: {}
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case fetchUser.pending.toString():
      return {
        ...state,
        inProgress: true
      }
    case fetchUser.fulfilled.toString():
      return {
        ...state,
        inProgress: false,
        user: payload,
        isServerError: false,
        serverError: {}
      }
    case fetchUser.rejected.toString():
      return {
        ...state,
        inProgress: false,
        isServerError: true,
        serverError: payload
      }
    default:
      return state
  }
}
