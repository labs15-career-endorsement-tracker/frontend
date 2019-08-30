import React, {useState, useEffect} from 'react'

const UserInfo = () => {
    const [user, setUser] = useState({first_name: ''})

    useEffect(() => {
        const userId = localStorage.getItem('userId')
    })

    return (
        <div className='userInfo-container'>
            <h1>Welcome dude who's name is... {user.first_name}</h1>
        </div>
    )
}

export default UserInfo