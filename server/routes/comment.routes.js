import express from 'express';
import { createComment, getCommentsByCommentId, getCommentsByPostId } from '../controllers/comment.controller.js';

const router = express.Router();

router.post('/', createComment);

router.get("/:post_id/:language", getCommentsByPostId)
router.get('/replies/:id', getCommentsByCommentId);
router.post("/upvote/:commentId")
router.post("/downvote?:commentId")




export default router