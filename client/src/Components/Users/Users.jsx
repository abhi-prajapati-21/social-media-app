import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Users.css'
import User from './User/User'
import { fetchAllUsers } from '../../Actions/fetchAllUsers'
import { setCurrentUser } from '../../Actions/currentUser'

const Users = () => {

  const dispatch = useDispatch()
  const users = useSelector(state => state.fetchUsersReducer)
  const currentUser = useSelector(state => state.currentUserReducer)
  // const currentUserInfo = users.filter(user => user?._id === currentUser?.data?.result._id)

  // console.log(currentUserInfo);

  useEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [])

  return (
    <div className=' users row d-flex'>
        <div className="user-header col-12 d-flex align-items-center text-white">
          <span className="display-6">Users</span>
        </div>
        <div className='userlist col-12 '>
            <div className=" user display-6 m-0 row  w-100  py-2 px-3 d-flex flex-wrap flex-sm-row justify-content-center justify-content-sm-start align-items-start">
               {users.filter(user => user?._id !== currentUser?.data?.result._id )
                .map((user, index) => <User key={index} userProps={{user, users}} /> ) 
               }
            </div>

        </div>
    </div>
  )
}

export default Users
