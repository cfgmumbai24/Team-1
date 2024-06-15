import express from 'express';
import { createComment, getCommentsByPostId } from '../controllers/comment.controller.js';

const router = express.Router();

router.post('/', createComment);

router.get("/:post_id", getCommentsByPostId)



export default router