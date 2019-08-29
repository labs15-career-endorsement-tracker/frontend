import React, {useState, useEffect} from 'react'

const UserInfo = () => {
    const [user, setUser] = useState({first_name: ''})

    return (
        <div className='userInfo-container'>
            <h1>Welcome Dude!</h1>
        </div>
    )
}

export default UserInfo