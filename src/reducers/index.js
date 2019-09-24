import { combineReducers } from "redux"

import requirementReducer from "./requirements"
import { stepReducer } from "./stepsReducer"
import { resourceReducer } from "./resourceReducer"
import { userReducer } from "./userReducer"
import { studentReducer } from "./studentReducer"

export default combineReducers({
  requirementReducer,
  stepReducer,
  resourceReducer,
  userReducer,
  studentReducer
})
