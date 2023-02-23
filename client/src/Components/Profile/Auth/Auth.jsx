import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Auth.css'
import { signup, login } from '../../../Actions/auth'
import { setCurrentUser } from '../../../Actions/currentUser'

const Auth = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

 useEffect(() => {
   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
   if(currentUser?.data) {
     navigate('/Community')
   }
 }, [])
  const currentUser = useSelector(state => state.currentUserReducer)

 const [islogin, setIsLogin] = useState(true);
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const switchForm = () => {
    setIsLogin(!islogin)
 }

 const authHandler = (e) => {
    e.preventDefault()
   
    if (!islogin) {
      
      if( !name && !email && !password){
        alert('Enter name, email and password')
      }else if(!name || !email || !password ){
        alert('field cant be empty')
      }
      else{
        dispatch(signup({name, email, password}, navigate));
      }
    }
    else{
      if( !email && !password ){
        alert('Enter email and password')
      }
       else if( !email || !password ){
         alert('field cant be empty')
        }
      // else if(email !== currentUser?.data?.result?.email){
      //   alert('invalid email')
      // }
      // else if(password !== currentUser?.data?.result?.password){
      //   alert('invalid password')
      // }
      else{
        dispatch(login({ email, password}, navigate))
      }
    }
  }

  return (
    <div className='profile row h-100 d-flex justify-content-center'>
        <div className=' profile-header col-12 display-6 text-white d-flex align-items-center'>
           {
            islogin ? 'Login' : 'Signup'
           }
        </div>
       <div className=" form-wrapper col-lg-5 col-sm-7 col-md-6 col-10 text-white h-50 ">
          <form onSubmit={authHandler} className=' form-log-sig h-auto p-4 d-flex justify-content-center flex-column rounded'>
            {
              !islogin && (
                <div className="mail text-white d-flex flex-column">
                  <label htmlFor="Name" className='pb-2 fs-5'>Name</label>
                  <input type="text" id="name" className='in rounded border-0 p-1' placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
               </div>
              )  
            }
            <div className="mail text-white d-flex flex-column">
                <label htmlFor="email" className='pb-2 fs-5'>Email</label>
                <input type="email" id="email" className='in rounded border-0 p-1' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="pass text-white d-flex flex-column mt-2">
                <div className="frgt d-flex flext-row justify-content-between align-items-center pb-2">
                    <label htmlFor="password" className='fs-5'>Password</label>
                    {
                      islogin && ( <span className='text-info fs-6'>Forgot Password?</span> )  
                    }
                </div>
                <input type="password" id="password" className='in rounded border-0 p-1' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
             <input type="submit" className='bg-primary rounded text-white mt-4 py-1 border-0' value={
                islogin ? 'Login' : 'Signup'
             } />
          </form>
          <div className='ref-sign d-flex justify-content-center mt-2'>
           {
             islogin ? "Don't have an Account?" : 'Already have an Account?'
           } &nbsp;
           <span style={{cursor: 'pointer'}} className='text-info' onClick={switchForm}>
           {
            islogin ? 'Signup' : 'Login'
           }
           </span>
          </div>
       </div>
    </div>
  )
}

export default Auth;
