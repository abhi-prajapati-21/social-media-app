import * as api from '../api/index'

export const fetchAllUsers = () => async (dispatch) => {

    try {
        const { data } = await api.fetchUsers();
        dispatch({type: 'FETCH_USERS', payload: data})
    } catch (error) {
        console.log(error);
    }

}