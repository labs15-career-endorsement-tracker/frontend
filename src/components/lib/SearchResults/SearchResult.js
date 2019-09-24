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
          <div className='pin-status'>
              {user.isPinnedBy === null ?
              <div className="has-coach">
                <p className="coach-name">Pin Student</p>
              </div>
              :
                <div className='has-coach'>
                  <p className="coach-label">Coach: </p>
                  <p className="coach-name"> {user.isPinnedBy}</p>
                </div>
              } 
            <i onClick={handleToggle} className={`fad fa-thumbtack`}></i> 
          </div>
      </li>
    </NavLink>
  )
}

export default SearchResult
