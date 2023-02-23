import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Profile.css'

const NotLogged = () => {

  const navigate = useNavigate();

  return (
    <div className='col h-75 d-flex align-items-center justify-content-center flex-column'>
      <h1 className='text-white display-6'>Please signup or login first</h1>
      <button className='go-log-btn h5' onClick={() => navigate('/')}>Go to Login Page</button>
    </div>
  )
}

export default NotLogged
