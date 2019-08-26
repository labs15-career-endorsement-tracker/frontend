import React, {useState} from 'react'
import axios from 'axios'


const SignUp = () => {
    const [newUser, setNewUser] = useState({
            first_name: '',
            last_name: '',
            track_id: 0,
            email: '',
            password: '',
            confirm_password: ''
        })

        const newUserHandler = e => {
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const userInfo = {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            track_id: newUser.track_id,
            email: newUser.email,
            password: newUser.password,
            confirm_password: newUser.confirm_password
        }
        axios
            .post(, userInfo)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input
                name='first_name'
                value={newUser.first_name}
                type='text'
                onChange={newUserHandler}
                placeholder='First Name'
            />
             <input
                name='last_name'
                value={newUser.last_name}
                type='{Text}'
                onChange={newUserHandler}
                placeholder='Last Name'
            />
            <select 
                name='track_id' 
                value={newUser.track_id} 
                onChange={newUserHandler}>
                    <option value={0} >Select Track:</option>
                    <option value={1} >Web Development</option>
            </select>
             <input
                name='email'
                value={newUser.email}
                type='text'
                onChange={newUserHandler}
                placeholder='Email'
            />
             <input
                name='password'
                value={newUser.password}
                type='password'
                onChange={newUserHandler}
                placeholder='Password'
            />
            <input
                name='confirm_password'
                value={newUser.confirm_password}
                type='text'
                onChange={newUserHandler}
                placeholder='Confirm Password'
            />
            <button>Sign Up</button>
            
            
        </form>
    )
}

export default SignUp
