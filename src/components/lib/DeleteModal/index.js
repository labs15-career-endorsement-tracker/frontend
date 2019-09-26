import React, { useState } from 'react'

import { deleteUser } from '../../../api'
import { loadAuthDataFromLocalStorage } from '../../../store'

import "./index.scss"

const DeleteModal = () => {
    const [open, setOpen] = useState(false)

const handleClick = () => {
    const { token } = loadAuthDataFromLocalStorage()
    console.log(token)
}

    return (
        <>
            <h2 
                id="delete-account"
                onClick={() => setOpen(!open)}
                >
                Close my ENDRSD account
            </h2>
            <div className={open ? 'open' : 'closed'}>
                <p >Warning! By selecting "Delete My Account" I understand that I will be permanently deleting my account and all my user data.</p>
                <button 
                    onClick={handleClick}>
                        Delete My Account
                </button>
            </div>
        </>
    )
}

export default DeleteModal
