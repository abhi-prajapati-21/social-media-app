import * as api from '../api/index'
import { fetchPostsAction } from './fetchAllPosts'; 

export const deletePost = (_id) => async (dispatch) => {
       const deleteWarning = 'you want to delete this post?'  
    try {
        if (window.confirm(deleteWarning) === false) {
            return false
         }
        await api.deletePost(_id);
        dispatch(fetchPostsAction());
    } catch (error) {
        console.log(error);
    }
}