import React, {useEffect, useState} from "react"
import {searchAll} from "../../../api"

import uuid from "uuid/v4"

import "./index.scss"

const FindStudent = () => {
    const [onMount, setOnMount] = useState(true)
    const [searchField, setSearch] = useState('')
    const [typingTimeout, setTypingTimeout] = useState(0);
    const [foundStudents, setFoundStudents] = useState([])
    const handleChanges = e => {
        setSearch(e.target.value)
        
    }
    useEffect(() => {
        // prevent call from being run on mount
        if (!onMount) {
            if (typingTimeout) {
                clearTimeout(typingTimeout)
            }
            setTypingTimeout(setTimeout(() => search(), 400))
        }
        setOnMount(false)
    }, [searchField])
    const search = async (searchText) => {
        const data = await searchAll(searchField)
        setFoundStudents(data)
        console.log(data)
    }
    const handleSubmit = async (e) => {
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
                <input className="search" type="text" aria-label="Search" placeholder="eg. Bob" value={searchField} onChange={handleChanges}/>
                <button className="search-btn"><i className="fas fa-search"></i></button>
            </form>
            <div>
                {/* the key here should ideally be the user id, but currently there is no id coming from the server*/}
                {foundStudents.map(el => <div key={uuid()}>{el.first_name}</div>)}
            </div>
        </section>
    )
}

export default FindStudent