import { fetchSteps, toggleStep } from "../actions"

const initialState = {
  inProgress: false,
  serverError: {},
  isServerError: false,
  stepsByTask: []
}

export const stepReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case fetchSteps.pending.toString():
      return {
        ...state,
        inProgress: true
      }
    case fetchSteps.fulfilled.toString():
      return {
        ...state,
        inProgress: false,
        stepsByTask: payload
      }
    case fetchSteps.rejected.toString():
      return {
        ...state,
        inProgress: false,
        isServerError: true,
        serverError: payload
      }
    case toggleStep.pending.toString:
      return {
        ...state
      }
    case toggleStep.fulfilled.toString():
      return {
        ...state,
        stepsByTask: payload
      }
    case toggleStep.rejected.toString():
      return {
        ...state,
        isServerError: true,
        serverError: payload
      }
    default:
      return state
  }
}
