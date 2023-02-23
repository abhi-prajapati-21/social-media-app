import express from 'express'
import { addFriend, removeFriend } from '../Controllers/friendsController.js';

const router = express.Router();

router.patch('/add/:id', addFriend)
router.patch('/delete/:id', removeFriend)

export default router