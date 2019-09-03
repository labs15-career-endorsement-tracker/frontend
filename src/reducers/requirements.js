import { fetchRequirements } from "../actions"

const initialState = {
  inProgress: false,
  requirements: [],
  serverError: {},
  isServerError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case fetchRequirements.pending.toString():
      return { ...state, inProgress: true }

    case fetchRequirements.fulfilled.toString():
      return { ...state, inProgress: false, requirements: payload }

    case fetchRequirements.rejected.toString():
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

// export const requirementReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case REQUIREMENT_FETCH_IN_PROGRESS:
//       return {
//         ...state,
//         inProgress: true
//       }
//     case REQUIREMENT_FETCH_SUCCESS:
//       return {
//         ...state,
//         inProgress: false,
//         requirements: action.payload
//       }
//     case REQUIREMENT_FETCH_FAILURE:
//       return {
//         ...state,
//         inProgress: false,
//         isServerError: true,
//         serverError: action.payload
//       }
//     default:
//       return state
//   }
// }
