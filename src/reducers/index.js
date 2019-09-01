import { combineReducers } from "redux"
import { signUpReducer } from "./signUpReducer"
import { requirementReducer } from "./requirementReducer"
import { stepReducer } from "./stepsReducer"

export default combineReducers({
  signUpReducer,
  requirementReducer,
  stepReducer
})
