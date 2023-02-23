import React from 'react'
import './NavBar.css'
import '../../index.css'

const Avatar = ({ children , backgroundColor, py, px, fontSize}) => {
  
  const style = {
      backgroundColor,
      padding: `${py} ${px}`,
      fontSize
  }

  return (
    <div className='avatar' style={style}>
      { children } 
    </div>
  )
}

export default Avatar
