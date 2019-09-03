import { combineReducers } from "redux"
import signUpReducer from "./sign-up"
import requirementReducer from "./requirements"

export default combineReducers({
  signUpReducer,
  requirementReducer
})
