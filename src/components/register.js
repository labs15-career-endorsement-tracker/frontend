import React, {useState} from 'react'


const Register = () => {
    const [user, setUser] = useState({
            first_name: '', 
            last_name: '', 
            track_id: 1, 
            email: '', 
            password: ''
        })
    
    return (
        <form>
            <input
                name='first_name'
                value={user.first_name}
                type={Text}
                onChange={userHandler}
                placeholder='First Name'
            />
        </form>
    )
}

export default Register
