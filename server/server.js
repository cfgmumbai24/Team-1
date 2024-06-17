import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
import cookieParser from "cookie-parser";

import dbconnect from './db/dbConnect.js';
import authRoutes from './routes/auth.routes.js'
import forumRoutes from './routes/forum.routes.js'
import commentRoutes from './routes/comment.routes.js'
import videoRoutes from './routes/video.routes.js';



const PORT = process.env.PORT || 5001;
const app = express() ;
app.use(express.json()) ;
app.use(cors());

app.use(cookieParser()) //used to access cookies (we store jwt token here)
app.use('/api/auth', authRoutes)
app.use("/api/forum", forumRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/video",videoRoutes);


app.get('/', (req, res)=>{
    res.send(`server is ready on port ${PORT}`)
})



app.listen(PORT, ()=>{
    dbconnect();
     console.log("listening at port "+`${PORT}`)})
     //merging
