import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'});

export const signup = (authData) => API.post('/profile/signup', authData);
export const login = (authData) => API.post('/profile/login', authData);
export const uploadMedia = (formData) => API.post('/createPost/media', formData);

export const deletePost = (_id) => API.delete(`/post/delete/${_id}`)

export const likeDislikeAction = (_id, value) => API.patch(`/post/like/${_id}`, {value})
export const addFriend = (_id, userId) => API.patch(`/friends/add/${_id}`, userId)
export const removeFriend = (_id, friendId) => API.patch(`/friends/delete/${_id}`, friendId)

export const fetchUsers = () => API.get('/profile/fetchUsers');
export const fetchAllPosts = () => API.get('/community/fetchAllPosts');

