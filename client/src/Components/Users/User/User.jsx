import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../../Friends/Friends.css'
import Button from 'react-bootstrap/Button';
import Avatar from '../../NavBar/Avatar'
import { setCurrentUser } from '../../../Actions/currentUser'
import { addfriend } from '../../../Actions/friendsAction';

const User = ({ userProps }) => {

  const { user, users } = userProps;
  
  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [])
 
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUserReducer)
  const isFriend = users.filter(user => user._id === currentUser?.data?.result?._id)[0]

    let isInclud = false;
     isFriend?.friends?.forEach( friend => {
    if(user?._id === friend?.id){ 
      isInclud = true
    }
  }) //// hardcoder
 
  const addFriendHandler = () => {
    if (!currentUser?.data) {
      alert('you have to Login or signup first')
      return null;
    }
   if (window.confirm(`you want to add ${user?.name} as a Friend?`) === true) {
      dispatch(addfriend(currentUser?.data?.result._id, {userId: user?._id}))
   }
  }
 
  return (
    <div className=' fr-card mx-2 col-9 col-sm-5 col-md-4 col-lg-4 col-xl-3 d-flex align-items-center mt-2 px-0 rounded py-3'>
       <Avatar backgroundColor='seagreen' >{ user?.name?.charAt(0).toUpperCase() }</Avatar>
          <div className=" d-flex flex-column mx-3 text-white">
             <span className='h5'>{ user.name }</span>
             { isInclud ? <span className='already-friend h5 text-info'>already friend</span> :
             <Button variant="primary" className='text-nowrap' onClick={addFriendHandler} >Add friend</Button>
    
             }
          </div>
    </div>
  )
}

export default User
