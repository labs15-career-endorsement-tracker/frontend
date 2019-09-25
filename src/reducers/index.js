import { combineReducers } from "redux"

import requirementReducer from "./requirements"
import { stepReducer } from "./stepsReducer"
import { resourceReducer } from "./resourceReducer"
import { userReducer } from "./userReducer"
import { studentReducer } from "./studentReducer"

const appReducer = combineReducers({
  requirementReducer,
  stepReducer,
  resourceReducer,
  userReducer,
  studentReducer
})

export default (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined
  }

  return appReducer(state, action)
}
