import express from 'express';
import { fetchAllPosts } from '../Controllers/fetchAllPosts.js';

const router = express.Router();

router.get('/fetchAllPosts', fetchAllPosts)

export default router;
