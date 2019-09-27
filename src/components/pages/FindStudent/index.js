import React, { useEffect, useState, useCallback } from "react"
import { useSelector } from "react-redux"
import { searchAll } from "../../../api"
import { Debounce } from "react-throttle"

import { SearchResults } from "../../lib"

import "./index.scss"

const FindStudent = () => {
  const [searchField, setSearchField] = useState("")
  const [foundStudents, setFoundStudents] = useState([])
  const pinnedStudents = useSelector(
    state => state.studentReducer.pinnedStudents
  )

  const handleChanges = e => {
    setSearchField(e.target.value)
  }

  const search = useCallback(async () => {
    const data = await searchAll(searchField)
    setFoundStudents(data)
  }, [searchField])

  useEffect(() => {
    search()
  }, [searchField, search, pinnedStudents])

  const handleSubmit = async e => {
    e.preventDefault()
    search()
  }
  return (
    <section className="find-student-page">
      {/* <header>
        <h3>Find a Student</h3>
        <p>Search for a student by name</p>
      </header> */}
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
      <SearchResults results={foundStudents}></SearchResults>
    </section>
  )
}

export default FindStudent
