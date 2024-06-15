import express from "express";
import bcrypt from 'bcryptjs'
import generateCookieAndSetToken from "../utils/generateToken.js";
import Video from './../models/video.model.js';
import { addVideo, deleteVideo, getAllVideos } from "../controllers/video.controller.js";
import protectRoute from "../middleware/protectedRoute.js";
const router = express.Router();

router.post('/upload',addVideo);
router.get('/getAll',getAllVideos);
router.delete('/delete/:id',deleteVideo);







export default router;