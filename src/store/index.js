import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import promiseMiddleware from "redux-promise-middleware"
import logger from "redux-logger"

const middleware = [promiseMiddleware]
const composeEnhancers = composeWithDevTools({})

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger)
}

export default reducers => {
  return createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))
}
