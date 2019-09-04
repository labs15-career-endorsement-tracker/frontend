import { fetchRequirements } from "../actions"

const initialState = {
  inProgress: true,
  resourcesByReqId: []
}

export const resourceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case fetchRequirements.pending.toString():
      return {
        ...state,
        inProgress: true
      }
    case fetchRequirements.fulfilled.toString():
      return {
        ...state,
        inProgress: false,
        resourcesByReqId: payload
      }
    case fetchRequirements.rejected.toString():
      return {
        ...state
      }
    default:
      return state
  }
}
