import React from "react"
import uuid from "uuid/v4"

import SearchResult from "./SearchResult"

import "./index.scss"

const SearchResults = ({ results }) => {
  if (results.length <= 0) return <></>

  return (
    <ul className="search-results">
      {results.map(result => (
        <SearchResult key={uuid()} user={result}></SearchResult>
      ))}
    </ul>
  )
}

export default SearchResults
