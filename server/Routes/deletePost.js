import express from 'express';
import { deletePost } from '../Controllers/deletePost.js';
import { likeDislikeController } from '../Controllers/likeDislike.js';

const router = express.Router();

router.delete('/delete/:id', deletePost)
router.patch('/like/:id', likeDislikeController)

export default router;