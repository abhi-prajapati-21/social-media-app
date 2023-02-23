import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Community from './Components/Community/Community'
import CreatePost from './Components/Community/Create Post/CreatePost'
import Friends from './Components/Friends/Friends'
import Profile from './Components/Profile/Profile'
import Users from './Components/Users/Users'
import SearchFriend from './Components/SearchFriend/SearchFriend'
import Auth from './Components/Profile/Auth/Auth'

const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={ <Auth /> } />
        <Route path='/Community' element={ <Community /> } />
        <Route path='/CreatePost' element={ <CreatePost /> } />
        <Route path='/Profile' element={ <Profile /> } />
        <Route path='/Friends' element={ <Friends /> } />
        <Route path='/Users' element={ <Users /> } />
        <Route path='/Search' element={ <SearchFriend /> } />
    </Routes>
  )
}

export default AllRoutes
