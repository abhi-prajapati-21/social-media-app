import React,{ useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';

import Post from './Post/Post';

import './Community.css'
import { fetchPostsAction } from '../../Actions/fetchAllPosts';

const Community = () => {

  const dispatch = useDispatch();
  const Posts = useSelector(state => state.fetchAllPostsReducer);

  useEffect(()=> {
    dispatch(fetchPostsAction())
  }, [])

  return (
    <Row className='community'>
        <Col className='community-header col-12 h-20'>
           <h1 className='text-white mb-0 display-6'>Community Posts</h1>
           <Link to='/CreatePost'> <Button as="input" type="button" value="Create Post" className='post-btn '/> </Link>
       </Col>
       <Col className='post-field py-1'>
         <Row className='post-box  col-12 col-sm-11 col-md-9 col-lg-9 d-flex justify-content-center'>
            { 
             Posts?.data?.result.map(post => (<Post key={post._id} post={post} /> ))
            }
         </Row>
       </Col>
    </Row>
  )
}



export default Community
