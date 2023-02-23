const fetchAllPostsReducer = (state = [{}], action) => {

    switch (action.type) {
        case 'FETCH_POSTS':
            return {data: action.payload};
        default:
            return state;
    }
}
export default fetchAllPostsReducer;