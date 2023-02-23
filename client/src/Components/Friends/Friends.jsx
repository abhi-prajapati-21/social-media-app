import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Friend from "./Friend/Friend";
import "./Friends.css";
import { fetchAllUsers } from '../../Actions/fetchAllUsers'
import { setCurrentUser } from '../../Actions/currentUser';

const Friends = () => {
   
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUserReducer) 

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    dispatch(fetchAllUsers())
   }, [])

  const users = useSelector(state => state.fetchUsersReducer);

  const userFriends = users?.filter(user => user?._id === currentUser?.data?.result._id)[0]

   let allFriends = []
   
     for (let i = 0; i < userFriends?.friends.length; i++) {
          let elm = userFriends?.friends[i];
          allFriends.push( users.filter(user => elm.id === user._id))
      }
   const flated = allFriends.flatMap(num => num)
    // console.log(flated);
  // console.log(currentUser);
  //  console.log(userFriends?.friends[0]?.id);
  //  console.log(users);

  return (
    <div className="row h-100 d-flex flex-column mx-0 px-0">
      <div className="friends-header col-12 py-3 text-white d-flex align-items-center">
         <span className="display-6"> My Friends</span>
      </div>
      <div className="friends-list col-12 text-white">
       <div className=' fr row py-3 '>
       <div className='not-friend display-6 w-100 d-flex flex-wrap flex-sm-row justify-content-center justify-content-sm-start align-items-start'> 
          { 
           !currentUser?.data ? <span className='not-warning w-100 text-center'>please login or signup first</span> :
           
          flated?.length <= 0 ? <span className='not-warning w-100 text-center'>you don't have any friend</span> :  
            
           flated.map(friend => <Friend key={friend._id} friendProps={{friend, currentUser, userFriends}} />) 
          }
           </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
