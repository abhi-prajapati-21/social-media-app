import * as api from '../api/index'
import { fetchAllUsers } from './fetchAllUsers';

export const addfriend = (_id, userId) => async (dispatch) => {
   
    try {
        await api.addFriend(_id, userId);
        dispatch(fetchAllUsers());
    } catch (error) {
        console.log(error);
    }
}
export const removeFriendAction = (_id, friendId) => async (dispatch) => {

    try {
        await api.removeFriend(_id, friendId);
        dispatch(fetchAllUsers());
    } catch (error) {
        console.log(error);
    }
}