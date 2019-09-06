import { combineReducers } from "redux"

import requirementReducer from "./requirements"
import { stepReducer } from "./stepsReducer"
import { resourceReducer } from "./resourceReducer"

export default combineReducers({
  requirementReducer,
  stepReducer,
  resourceReducer
})
