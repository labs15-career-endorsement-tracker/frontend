import { combineReducers } from "redux"

import requirementReducer from "./requirements"
import { resourceReducer } from "./resourceReducer"
import { stepReducer } from "./stepsReducer"

export default combineReducers({
  requirementReducer,
  stepReducer,
  resourceReducer
})
