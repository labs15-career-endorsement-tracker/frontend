import { combineReducers } from "redux"
import { signUpReducer } from "./signUpReducer"
import { requirementReducer } from "./requirementReducer"

export default combineReducers({
  signUpReducer,
  requirementReducer
})
