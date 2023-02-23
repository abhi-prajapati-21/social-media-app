import * as api from '../api/index'

export const uploadMediaAction = (currentUserID, formData) => async (dispatch) => {
    try {
        await api.uploadMedia(currentUserID, formData);
    } catch (error) {
        console.log(error);
    }
}