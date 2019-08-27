import React, { Component } from "react"
import axios from "axios"
import "./App.css"

import SignUp from './components/SignUp'

export default class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios
      .get("https://career-endorsement-api.herokuapp.com/api/v0.1.1/users")
      .then(res => {
        const userData = res.data[0]
        this.setState({ users: userData })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let user = this.state.users
    return (
      <div className="container">
        <h1>Hello World</h1>
        <div className="user-card">
          <div key={user.id} className="user-card">
            <h3>Backend API</h3>
            <a href="#" target="_blank">
              https://career-endorsement-api.herokuapp.com/
            </a>
            <div className="user">
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        <SignUp />
      </div>
    )
  }
}
