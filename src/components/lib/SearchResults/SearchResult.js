import React from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { loadAuthDataFromLocalStorage } from "../../../store"

import { togglePinnedStudent } from "../../../actions"

const SearchResult = ({ user }) => {
  const dispatch = useDispatch()

  const { token } = loadAuthDataFromLocalStorage()

  const handleToggle = e => {
    e.preventDefault()
    dispatch(togglePinnedStudent(token, user.id))
  }

  return (
    <NavLink to={`/student/${user.id}`}>
      <li className="search-result">
        <div className="name">
          <h4>{user.first_name}</h4>
          <small>{user.last_name}</small>
        </div>
        {/* <p className="progress">
          <span>{user.progress || 0}</span>
          <strong>Endorsed</strong>
        </p> */}
        {/* <i onClick={handleToggle} className={`fas fa-user-plus`}></i> */}
        <div onClick={handleToggle} >
          {user.isPinnedBy === null 
          ? 
          <div className='pin-status'>
            <p>Pin Student</p>
            <i className={`fad fa-thumbtack`}></i> 
          </div>
          : 
          <div className='pin-status'>
            <p>Coach: {user.isPinnedBy}</p>
            <i className="far fa-times-circle"></i>
          </div>
          }
        </div>
      </li>
    </NavLink>
  )
}

export default SearchResult
