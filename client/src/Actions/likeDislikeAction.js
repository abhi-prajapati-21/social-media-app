import * as api from '../api/index'
import { fetchPostsAction } from './fetchAllPosts';

export const likeDislikeAction = (id, value) => async (dispatch) =>{
    try {
        await api.likeDislikeAction(id, value);
        dispatch(fetchPostsAction());
    } catch (error) {
        console.log(error);
    }
}