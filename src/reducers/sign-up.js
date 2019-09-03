import { createUser } from "../actions"

const initialState = {
  inProgress: false,
  serverError: {},
  isServerError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case createUser.pending.toString():
      return { ...state, inProgress: true }

    case createUser.fulfilled.toString():
      localStorage.setItem("token", payload.token)
      localStorage.setItem("userId", payload.userId)
      return { ...state, inProgress: false }

    case createUser.rejected.toString():
      return {
        ...state,
        inProgress: false,
        serverError: payload,
        isServerError: true
      }

    default:
      return state
  }
}
