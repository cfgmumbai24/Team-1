import express from "express";
import bcrypt from 'bcryptjs'
import User from "../models/user.model.js";
import generateCookieAndSetToken from "../utils/generateToken.js";
import { addPost, getForumPostsInRange } from "../controllers/forum.controller.js";

const router = express.Router();


router.post("/", addPost);
router.get("/:start/:end/:language", getForumPostsInRange)


export default router