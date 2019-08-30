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
            <div className='dateAndGreet'>
                <div className='date'>{todayDate}</div>
                <h2 className='welcome-msg'>Welcome back, {user.first_name}<br/> LET'S GET ENDRSR!</h2>
            </div>
        </div>
    )
}

export default UserInfo