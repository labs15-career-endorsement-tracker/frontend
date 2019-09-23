import React, { useEffect, useState, useCallback } from "react"
import { searchAll } from "../../../api"
import { Debounce } from "react-throttle"
import { StudentSearchResults } from '../../lib'

import "./index.scss"

const FindStudent = () => {
  const [searchField, setSearchField] = useState("")
  const [foundStudents, setFoundStudents] = useState([])

  const handleChanges = e => {
    setSearchField(e.target.value)
  }

  const search = useCallback(async () => {
    const data = await searchAll(searchField)
    setFoundStudents(data)
  }, [searchField])

  useEffect(() => {
    search()
  }, [searchField, search])

  const handleSubmit = async e => {
    e.preventDefault()
    search(searchField)
  }
  return (
    <section className="find-student-page">
      <header>
        <h3>Find a Student</h3>
        <p>Search for a student by name</p>
      </header>
      <form onSubmit={e => handleSubmit(e)}>
        <Debounce time="400" handler="onChange">
          <input
            className="search"
            type="text"
            aria-label="Search"
            placeholder="eg. Bob"
            onChange={handleChanges}
          />
        </Debounce>
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div>
       <StudentSearchResults foundStudents={foundStudents}/>
      </div>
    </section>
  )
}

export default FindStudent
