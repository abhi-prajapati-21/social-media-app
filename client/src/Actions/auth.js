import * as api from '../api/index'
import { setCurrentUser } from './currentUser';


export const signup = (authData, navigate) => async (dispatch) => {
        

    try {
        const { data } = await api.signup(authData);
        dispatch({type: 'AUTH', payload: data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/Community')
    } catch (error) {
        console.log(error);
    }
}

 export const login = (authData, navigate) => async (dispatch) => {
        
     try {
        console.log(authData);
         const { data } = await api.login(authData);
         console.log(data);
         dispatch({type: 'AUTH', payload: data})
         dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
         navigate('/Community');
     } catch (error) {
         console.log(error);
     }
 }