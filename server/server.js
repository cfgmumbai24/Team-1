import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import dbconnect from './db/dbConnect.js';
import authRoutes from './routes/auth.routes.js'
import forumRoutes from './routes/forum.routes.js'
import commentRoutes from './routes/comment.routes.js'



const PORT = process.env.PORT;
const app = express() 
app.use(express.json())  

app.use(cookieParser()) //used to access cookies (we store jwt token here)


app.get('/', (req, res)=>{
    res.send(`server is ready on port ${PORT}`)
})

app.use('/api/auth', authRoutes)
app.use("/api/forum", forumRoutes)
app.use("/api/comments", commentRoutes)

app.listen(PORT, ()=>{
    dbconnect();
     console.log("listening at port "+`${PORT}`)})
     //merging
