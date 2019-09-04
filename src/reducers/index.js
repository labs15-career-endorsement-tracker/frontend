import { combineReducers } from "redux"

import requirementReducer from "./requirements"
import { stepReducer } from "./stepsReducer"

export default combineReducers({
  requirementReducer,
  stepReducer
})
