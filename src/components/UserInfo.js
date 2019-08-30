import React, {useState, useEffect} from 'react'
import axios from 'axios';

const UserInfo = () => {
    const [user, setUser] = useState({first_name: ''})

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        axios
            .get('http://localhost:5000/api/v0/users')
            .then(res => {
                const filtUser = res.data.filter(user => user.id === parseInt(userId))
                setUser(filtUser[0])
            })
    }, [])

    return (
        <div className='userInfo-container'>
            <h1>Welcome dude who's name is... {user.first_name}</h1>
        </div>
    )
}

export default UserInfo