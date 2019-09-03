import { createAsyncAction } from "redux-promise-middleware-actions"

import { addUser, getRequirements } from "../api"

export const createUser = createAsyncAction("CREATE_USER", addUser)

export const fetchRequirements = createAsyncAction(
  "FETCH_REQUIREMENTS",
  getRequirements
)
