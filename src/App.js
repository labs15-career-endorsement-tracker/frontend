import React, { Component } from "react"
import axios from "axios"
import "./App.css"

export default class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const users = res.data
        this.setState({ users })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="container">
        {this.state.users.map(i => (
          <div key={i.id} className="user-card">
            <h1>{i.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}
