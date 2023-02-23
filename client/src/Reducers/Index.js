import { combineReducers } from "redux";

import authReducer from './authReducer'
import fetchUsersReducer from "./fetchUsersReducer";
import currentUserReducer from "./currentUserReducer";
import fetchAllPostsReducer from "./fetchAllPostsReducer";
import friendsReducer from "./fetchFriends";

export default combineReducers({
    authReducer,
    fetchUsersReducer,
    currentUserReducer,
    fetchAllPostsReducer,
    friendsReducer
})