import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, } from 'react-redux';

import '../Friends.css'
import Avatar from '../../NavBar/Avatar'
import { removeFriendAction } from '../../../Actions/friendsAction';


const Friend = ({ friendProps }) => {

   const {friend, currentUser, userFriends }= friendProps;
  const filterId = userFriends?.friends?.filter(friendParams => friendParams.id === friend._id)[0]

   const dispatch = useDispatch()

  const removeFriend = () => {
    if(window.confirm(`You want to remove ${friend?.name} from friend`)){
       dispatch(removeFriendAction(currentUser?.data?.result?._id, {friendId: filterId._id}))
    }
  } 

//  console.log(userFriends?.friends[0].id);
//  console.log(filterId);
  return (
       <div className='fr-card mt-2 col-9 mx-1 col-lg-4 col-md-4 col-sm-5 d-flex align-items-center px-0 rounded py-3'>
         <Avatar fontSize={'30px'}> { friend?.name?.charAt(0).toUpperCase() }</Avatar>
          <div className="d-flex flex-column mx-3">
             <span className='friend-name h5'>{ friend?.name }</span>
             <Button variant="danger" className='remove-btn text-nowrap' onClick={removeFriend} >Remove friend</Button>
          </div>
       </div>
  )
}

export default Friend
