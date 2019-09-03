import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import "./styles/index.scss"

import createStore from "./store"
import rootReducer from "./reducers"
import App from "./App"

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
