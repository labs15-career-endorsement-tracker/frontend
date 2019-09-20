import React, {useEffect, useState} from "react"

import "./index.scss"
import { handleSubmit } from "../PasswordResetForm/utils";

const FindStudent = () => {
    const [search, setSearch] = useState('')
    const [typingTimeout, setTypingTimeout] = useState(0);
    const handleChanges = e => {
        setSearch(e.target.value)
        if (typingTimeout) {
            clearTimeout(typingTimeout)
        }
        setTypingTimeout(setTimeout(() => handleSubmit(typingTimeout), 300))
    }
    const handleSubmit = () => {
        console.log(typingTimeout)
    }
    return (
        <section className="find-student-page">
            <header>
                <h3>Find a Student</h3>
                <p>Search for a student by name</p>
            </header>
            <form>
                <input className="search" type="text" aria-label="Search" placeholder="eg. Bob" value={search}onChange={handleChanges}/>
                <button className="search-btn"><i className="fas fa-search"></i></button>
            </form>
            <div>
                Something
            </div>
        </section>
    )
}

export default FindStudent