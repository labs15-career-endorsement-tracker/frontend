import React from "react"

import "./index.scss"

const FindStudent = () => {
    
    return (
        <section className="find-student-page">
            <header>
                <h3>Find a Student</h3>
                <p>Search for a student by name</p>
            </header>
            <form>
                <input className="search" type="text" aria-label="Search" placeholder="eg. Bob"/>
                <button className="search-btn"><i className="fas fa-search"></i></button>
            </form>
            <div>
                Something
            </div>
        </section>
    )
}

export default FindStudent