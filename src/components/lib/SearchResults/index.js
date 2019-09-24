import React from "react"

import SearchResult from "./SearchResult"

import "./index.scss"

const SearchResults = ({ results }) => {
  if (results.length <= 0) return <></>

  return (
    <ul className="search-results">
      {results.map(result => (
        <SearchResult key={result.id} user={result}></SearchResult>
      ))}
    </ul>
  )
}

export default SearchResults
