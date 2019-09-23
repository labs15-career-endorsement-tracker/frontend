import React from "react"
import { NavLink } from "react-router-dom"

const SearchResult = ({ user }) => {
  return (
    <NavLink to={`/student/${user.id}`}>
      <li className="search-result">
        <div className="name">
          <h4>{user.first_name}</h4>
          <small>{user.last_name}</small>
        </div>
        <p className="progress">
          <span>{user.progress || 0}</span>
          <strong>Endorsed</strong>
        </p>
        <i className={`fas fa-user-plus`}></i>
      </li>
    </NavLink>
  )
}

export default SearchResult
