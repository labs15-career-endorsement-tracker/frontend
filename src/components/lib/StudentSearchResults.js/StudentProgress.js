import React, { useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { loadAuthDataFromLocalStorage } from "../../../store"

import { fetchUser } from '../../../actions'


const StudentProgress = ({userId}) => {
    console.log(userId)
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    dispatch(fetchUser(token, userId))
  }, [dispatch, userId])

    return (
        <div>
            {user.progress}% of Endorsement
        </div>
    );
}

export default StudentProgress;
