import React from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

import Button from 'react-bootstrap/esm/Button'
import '../Profile.css'
import Avatar from '../../NavBar/Avatar'

const MyProfile = ({ currentUser }) => {

  const navigate = useNavigate();
 
  const logoutHandler = () => {
    if( window.confirm('you want to logout ?')){
      localStorage.clear()
      navigate('/')
    }
    
  }

  return (
    <div className='profile row h-100 d-flex justify-content-center'>
      <div className=' profile-header col-12 display-6 text-white d-flex align-items-center'>
        My Profile
      </div>
      <div className=" profile-box col-11 col-sm-8 col-md-6 d-flex flex-column justify-content-center align-items-center text-white">
        <Avatar backgroundColor='purple' py='45px' px='60px' fontSize='3rem'>
          {
            currentUser?.data?.result?.name.charAt().toUpperCase()
          }
        </Avatar>
        <span className='h4 py-4'>
          {
            currentUser?.data?.result?.name
          }
        </span>
        <span className='h5 pb-4'>
          Member since -&nbsp;
          {
            moment(currentUser?.data?.result?.joinedOn).fromNow()
          }
        </span>
        <Button variant="primary" className='text-nowrap' onClick={logoutHandler}>Log Out</Button>
      </div>
    </div>
  )
}

export default MyProfile
