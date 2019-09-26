
const initialState = {
  isOpen: false
}

export const menuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isOpen: payload
      }
    default:
      return state
  }
}
