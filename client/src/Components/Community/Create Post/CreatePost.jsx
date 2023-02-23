import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, } from 'react-router-dom'
import { setCurrentUser } from '../../../Actions/currentUser'
import { uploadMediaAction } from '../../../Actions/uploadMedia'
import './CreatePost.css'

const CreatePost = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [])

  const currentUser = useSelector(state => state.currentUserReducer)

  const currentUser_ID = currentUser?.data?.result?._id

  // console.log(currentUser_ID);

  const [postBody, setPostBody] = useState('');
  const [postMedia, setPostMedia] = useState(null);
  // const [postVideo, setPostVideo] = useState(null);

  const postSubmitHandler = (e) => {
    e.preventDefault()

    if(!currentUser.data){
      alert('please login or signup first')
      return 
    }

    if (!currentUser.data) {
      alert("please login or signup first to post")
      return null
    } 

    if (!postMedia && !postBody) {
      alert("add atleast one field (text or media)")
      return null
    }

    // if ( postMedia && postVideo ) {
    //   alert('you can choose only one file (video or image)');
    //   return null
    // }
    
    const formData = new FormData();
    formData.append('image', postMedia)
    formData.append('postBody', postBody)
    formData.append('userName', currentUser?.data?.result?.name)
    formData.append('userId', currentUser_ID)
    dispatch(uploadMediaAction(formData));
    navigate('/Community')
  }

  return (
    <div className='create-post row h-100'>
      <div className=' create-post-header col-12 mh-25 py-3 text-white d-flex align-items-center'>
          <h1 className='my-0 display-6'>Create New Post</h1>
      </div>
      <div className="form-box col-12 text-white h-100">  
        <form action='/media' method="post" encType="multipart/form-data" onSubmit={postSubmitHandler}>
          <div className="desc d-flex align-items-start flex-column py-3">
            <label htmlFor="desc" className='h5'>Description</label>
            <textarea 
            name='postbody'
            id="desc" 
            cols="30" 
            rows="10" 
            onChange={(e) => setPostBody(e.target.value)}
            className='desc-body w-75 bg-transparent text-white h5 fw-normal' 
            spellCheck='false'></textarea>
          </div>
          <div className="file text-white d-flex align-items-center flex-row">
            <label htmlFor="file" className='file-labels py-2 px-2 bg-primary rounded px-4 '>Add Media</label>
            <input 
            type="file" 
            name="image" 
            id="file" 
            onChange={(e) => setPostMedia(e.target.files[0])}
            accept='image/*, video/*' 
            className='d-none'/>
            {/* <label htmlFor="file" className=' file-labels py-2 px-2  bg-primary rounded px-4 mx-3'>Add Video</label>
            <input 
            type="file" 
            onChange={(e) => setPostVideo(e.target.files[0])} 
            name="image" 
            id="file" 
            accept='video/*' 
            className='d-none'/> */}
          </div>
          <input 
           type="submit"
           value="Post" 
           className=' py-2 text-white bg-primary rounded px-4 mt-5 border-primary' />
        </form>

      </div>
    </div>
  )
}

export default CreatePost
