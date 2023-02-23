import React from 'react'
import { NavLink } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import communityIcon from '../../Assets/community.png'
import friendsIcon from '../../Assets/friends.png'
import usersIcon from '../../Assets/users.png'
import searchIcon from '../../Assets/search.png'
import profileIcon from '../../Assets/profile.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <Row className='navbar px-2 py-0 py-md-7'>
       <Col className='logo-div col-lg-3 col-md-3 col-sm-4 col-2' > 
           <h1 className=' logo text-info text-nowrap display-6 fw-normal'>Social Hub</h1> 
        </Col>
        <Col className='nav-links-container p-0 col-8 h-100'>
            <NavLink to='/Community' className='navlinks ' activeclassname='active'> 
              <img src={communityIcon} alt="Community Post" className='icons'/>
             </NavLink>
            <NavLink to='/Friends' className='navlinks' activeclassname='active'> 
              <img src={friendsIcon} alt="friends" className='icons'/>
             </NavLink>
            <NavLink to='/Users' className='navlinks' activeclassname='active'> 
              <img src={usersIcon} alt="users" className='icons'/>
             </NavLink>
            <NavLink to='/Search' className='navlinks' activeclassname='active'> 
              <img src={searchIcon} alt="search" className='icons'/>
             </NavLink>
            <NavLink to='/Profile' className='navlinks' activeclassname='active'> 
              <img src={profileIcon} alt="profile" className='pro-icon icons'/>
             </NavLink>
        </Col>
    </Row>
  )
}

export default NavBar
