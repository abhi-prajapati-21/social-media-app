const friendsReducer = (state = null, action) => {
    
    switch (action.type) {
        case 'FETCH_FRIENDS':
            return action.payload;
        default:
            return state;
    }
}
export default friendsReducer