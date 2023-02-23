import express from 'express'
import { signup, login } from '../Controllers/auth.js';
import { fetchAllUsers } from '../Controllers/fetchUsers.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/fetchUsers', fetchAllUsers)

export default router;