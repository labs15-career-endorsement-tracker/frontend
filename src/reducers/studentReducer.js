import { togglePinnedStudent } from "../actions"

const initialState = {
  inProgress: false,
  serverError: {},
  isServerError: false,
  pinnedStudents: []
}

export const studentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case togglePinnedStudent.pending.toString:
      return {
        ...state
      }
    case togglePinnedStudent.fulfilled.toString():
      return {
        ...state,
        pinnedStudents: payload
      }
    case togglePinnedStudent.rejected.toString():
      return {
        ...state,
        isServerError: true,
        serverError: payload
      }
    default:
      return state
  }
}
