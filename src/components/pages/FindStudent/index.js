import React, {useEffect, useState} from "react"
import {searchAll} from "../../../api"

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
        console.log({searchField})
        const data = await searchAll(searchField)
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
                Something
            </div>
        </section>
    )
}

export default FindStudent