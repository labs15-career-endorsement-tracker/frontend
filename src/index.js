import React from "react"
import ReactDOM from "react-dom"

import { Router } from "react-router-dom"
import { Provider } from "react-redux"
import { toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import "./styles/index.scss"

import { createStore, history } from "./store"
import rootReducer from "./reducers"

import App from "./App"

toast.configure({
  autoClose: 5000,
  draggable: false
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
