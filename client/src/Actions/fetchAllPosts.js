import * as api from '../api/index'

export const fetchPostsAction = () => async (dispatch) => {

    try {
        const { data } = await api.fetchAllPosts();
        dispatch({type: 'FETCH_POSTS', payload: data});
    } catch (error) {
        console.log(error);
    }
}