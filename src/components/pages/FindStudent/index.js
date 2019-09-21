import React, { useEffect, useState } from "react"
import { searchAll } from "../../../api"
import { Debounce } from "react-throttle"

import uuid from "uuid/v4"

import "./index.scss"

const FindStudent = () => {
  const [searchField, setSearchField] = useState("")
  const [foundStudents, setFoundStudents] = useState([])

  const handleChanges = e => {
    console.log(e.target.value)
    setSearchField(e.target.value)
  }
  const search = async searchText => {
    const data = await searchAll(searchField)
    setFoundStudents(data)
  }

  useEffect(() => {
    search()
  }, [searchField])

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
        {foundStudents.map(({ first_name, last_name }) => (
          <div key={uuid()}>
            {first_name} {last_name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FindStudent
