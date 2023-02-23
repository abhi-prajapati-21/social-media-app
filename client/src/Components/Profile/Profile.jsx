import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Profile.css'
import MyProfile from './MyProfile/MyProfile'
import { setCurrentUser } from '../../Actions/currentUser'

import NotLogged from './NotLogged'

const Profile = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [])

  const currentUser = useSelector(state => state.currentUserReducer);
  
  return (
    <div className='row h-100'>
       <div className="col h-100">
        { !currentUser?.data ? 
        ( 
          <NotLogged /> 
        ):
          <MyProfile currentUser={currentUser}/>
          }
        
       </div>
    </div>
  )
}

export default Profile
