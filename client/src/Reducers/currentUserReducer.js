
const currentUserReducer = (state = null, action) => {
      
    switch (action.type) {
        case 'CURRENT_USER':
            return {data: action.payload};
        default:
            return state;
    }
}

export default currentUserReducer;