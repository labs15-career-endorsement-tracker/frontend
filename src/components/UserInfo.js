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

    const todayDate = new Date().toDateString()
    console.log(todayDate)

    return (
        <div className='userInfo-container'>
            <span className='date'>{todayDate}</span>
            <h2 className='welcome-msg'>Let's get to work {user.first_name}</h2>
        </div>
    )
}

export default UserInfo