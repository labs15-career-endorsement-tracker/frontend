import React, {useState} from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )

const SignUp = (inProgress) => {
    console.log(inProgress)
    const [newUser, setNewUser] = useState({
        first_name: '',
        last_name: '',
        track_id: 0,
        email: '',
        password: '',
        confirm_password: ''
    })
    const [formError, setFormError] = useState({
        first_name_error: '',
        last_name_error: '',
        track_id_error: '',
        email_error: '',
        password_error: '',
        confirm_password_error: ''
    })
    console.log()

        const newUserHandler = e => {
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value
        })
    }

    const validate = () => {
        let first_name_error = ''
        let last_name_error = ''
        let track_id_error = ''
        let email_error = ''
        let password_error = ''
        let confirm_password_error = ''

        if (!newUser.first_name) {
            first_name_error = "First Name is required"
        }
        if (!newUser.last_name) {
            last_name_error = "Last name is required"
        }
        if (newUser.track_id === 0) {
            track_id_error = "Please select a track"
        }
        if (!emailRegex.test(newUser.email)) {
            email_error = "Must be a valid email address"
        }
        if (newUser.password.length < 8 || newUser.password.length > 16) {
            password_error = "Password must be 8 to 16 characters"
        }
        if (newUser.confirm_password !== newUser.password) {
            confirm_password_error = "Password must match"
        }

        if (first_name_error || last_name_error || track_id_error || email_error || password_error || confirm_password_error) {
            setFormError({ first_name_error, last_name_error, track_id_error, email_error, password_error, confirm_password_error })
            return false
        }

        return true
    }

    const handleSubmit = e => {
        e.preventDefault()
        const valid = validate()
        if (valid) {
            console.log(newUser)

        setNewUser({  
            first_name: '',
            last_name: '',
            track_id: 0,
            email: '',
            password: '',
            confirm_password: ''
        })
        setFormError({   
            first_name_error: '',
            last_name_error: '',
            track_id_error: '',
            email_error: '',
            password_error: '',
            confirm_password_error: ''
        })
        }
    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <h2>{inProgress ? 'Creating User...' : 'Sign Up'}</h2>
            <input
                name='first_name'
                value={newUser.first_name}
                type='text'
                noValidate
                onChange={newUserHandler}
                placeholder='First Name'
            />
            <span>{formError.first_name_error}</span>
            <input
                name='last_name'
                value={newUser.last_name}
                type='text'
                noValidate
                onChange={newUserHandler}
                placeholder='Last Name'
            />
            <span>{formError.last_name_error}</span>
            <select
                name='track_id'
                value={newUser.track_id}
                noValidate
                onChange={newUserHandler}>
                    <option value={0} >Select Track:</option>
                    <option value={1} >Web Development</option>
            </select>
            <span>{formError.track_id_error}</span>
            <input
                name='email'
                value={newUser.email}
                type='email'
                noValidate
                onChange={newUserHandler}
                placeholder='Email'
            />
            <span>{formError.email_error}</span>
            <input
                name='password'
                value={newUser.password}
                type='password'
                noValidate
                onChange={newUserHandler}
                placeholder='Password'
            />
            <span>{formError.password_error}</span>
            <input
                name='confirm_password'
                value={newUser.confirm_password}
                type='password'
                noValidate
                onChange={newUserHandler}
                placeholder='Confirm Password'
            />
            <span>{formError.confirm_password_error}</span>
            <button>Sign Up</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        inProgress: state.signUpReducer.inProgress
    }
}

export default connect(
    mapStateToProps,
    { createUser }
)(SignUp)
