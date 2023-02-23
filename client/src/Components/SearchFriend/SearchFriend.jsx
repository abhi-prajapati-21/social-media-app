import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FindedUsers from './FindedUsers/FindedUsers'
import { fetchAllUsers } from '../../Actions/fetchAllUsers'

import './SearchFriend.css'

const SearchFriend = () => {

  const [searchQuery, setSearchQuery] = useState('');

  //fetching all users
  const dispatch = useDispatch()
  const users = useSelector(state => state.fetchUsersReducer) 

  useEffect(() => {
   dispatch(fetchAllUsers());

  }, [])

  return (
    <div className='search-friend row d-flex'>
       <div className="search-header col-12 d-flex align-items-center justify-content-center">
          <input 
          type="search" 
          placeholder='Search' 
          onChange={(e) => setSearchQuery(e.target.value)}
          className='search-input w-75 rounded text-white' 
          spellCheck='false' />
       </div>
       <div className="finded col-12 ">
          <div className="scroll display-6 row py-2 px-3 d-flex flex-wrap flex-sm-row justify-content-center justify-content-sm-start align-items-start">
            {
             users?.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()) )
             .map((user, index )=> <FindedUsers userProps={{user, users}} key={index} />) 
            }
          </div>
       </div>
      
    </div>
  )
}

export default SearchFriend
