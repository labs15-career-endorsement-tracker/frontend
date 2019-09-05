import { fetchResources } from "../actions"

const initialState = {
  resourceInProgress: false,
  resourceIsServerError: false,
  resources: [],
  resourceServerError: {}
}

export const resourceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case fetchResources.pending.toString():
      return {
        ...state,
        resourceInProgress: true
      }
    case fetchResources.fulfilled.toString():
      return {
        ...state,
        resourcesInProgress: false,
        resources: payload
      }
    case fetchResources.rejected.toString():
      return {
        ...state,
        resourceInProgress: false,
        resourceIsServerError: true,
        resourceServerError: payload
      }
    default:
      return state
  }
}
