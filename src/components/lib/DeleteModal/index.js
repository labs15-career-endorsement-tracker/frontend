import React, { useState } from 'react'

import { deleteUser } from '../../../api'

import "./index.scss"

const DeleteModal = () => {
    const [open, setOpen] = useState(false)
    console.log(open)

const handleClick = () => {
    console.log("delete")
}
const toggleModal = () => {
    setOpen(!open)
  }
    return (
        <>
            <h2 
                id="delete-account"
                onClick={() => toggleModal()}
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
