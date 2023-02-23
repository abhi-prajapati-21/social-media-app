import React, { useEffect } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import copy from 'copy-to-clipboard'

import './Post.css'
import Avatar from '../../NavBar/Avatar'
import { setCurrentUser } from '../../../Actions/currentUser'
import like from '../../../Assets/thumb-up.png'
import unlike from '../../../Assets/thumb-down.png'
import share from '../../../Assets/next.png'
import deleteIcon from '../../../Assets/delete.png'
import { deletePost } from '../../../Actions/deletePost'
import { likeDislikeAction } from '../../../Actions/likeDislikeAction'


const Post = ({ post }) => {

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [])

  const currentUser = useSelector(state => state.currentUserReducer) 

  const deletePostHandler = () => {
    dispatch(deletePost(post._id));
  }
   
  const likeHandler = () => {
    if(!currentUser.data){
      alert('please login or signup first')
      return 
    }
   dispatch(likeDislikeAction(post._id, {value: 'likes', userId: currentUser?.data.result._id}))
  }

  const disLikeHandler = () => {
    if(!currentUser.data){
      alert('please login or signup first')
      return 
    }
    dispatch(likeDislikeAction(post._id, {value: 'disLikes', userId: currentUser?.data.result._id}))
  }
   
  const url = 'https://social-media-app-0uej.onrender.com';
  const shareHandler = () => {
    copy(url+location.pathname)
    alert('Copied url : '+url+location.pathname)
  }

  return (
    <div className='post col-lg-10 px-0 col-md-12 text-white' >
       <div className="post-header w-100 d-flex align-items-center py-2">
         <Avatar >{ post?.userPosted?.userName.charAt(0).toUpperCase() }</Avatar>
         <div className="name-info d-flex flex-column mx-3">
           <span> {post?.userPosted?.userName }</span>
           <span> {moment(post.postedOn).fromNow() }</span>
         </div>
       </div>
       <div className='post-body w-100 text-wrap px-3 py-2'>
          <span>{ post.postBody }</span>
        </div>
        <div className="post-img-box w-100 py-2 d-flex justify-content-center">
          { post?.mediaType === 'image' &&
          <>
          <img src={ `http://localhost:5000/${post.postMedia}` } alt="" className='post-img img-fluid' />
          </>
           }
           { post?.mediaType === 'video' &&
           (<video src={ `http://localhost:5000/${post.postMedia}` } className='post-video ' controls={true}></video>)
           }
        </div>
         <div className="post-btm w-100">
          <div className="post-opt-box" onClick={likeHandler}>
            <img src={like} alt="" className='post-opt'/>
            <p className='like-counter text-white '>{post.likes.length - 1 }</p>
          </div>
          <div className="post-opt-box" onClick={disLikeHandler}>
            <img src={unlike} alt="" className='post-opt'/>
            <p className='like-counter text-white '>{ post.disLikes.length - 1}</p>
          </div>
          <div className="post-opt-box" onClick={shareHandler}>
            <img src={share} alt="" className='post-opt'/>
          </div>
          { currentUser?.data?.result._id === post.userPosted.userId &&
            <div className="post-opt-box" onClick={deletePostHandler}>
            <img src={deleteIcon} alt="" className='post-opt img-fluid'/>
           </div>
          }
        </div> 
    </div>
  )
}

export default Post
