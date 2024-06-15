import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import dbconnect from './db/dbConnect.js';
import authRoutes from './routes/auth.routes.js'



const PORT = process.env.PORT;
const app = express() 
app.use(express.json())  

app.use(cookieParser()) //used to access cookies (we store jwt token here)


app.get('/', (req, res)=>{
    res.send(`server is ready on port ${PORT}`)
})

app.use('/api/auth', authRoutes)

app.listen(PORT, ()=>{
    dbconnect();
     console.log("listening at port "+`${PORT}`)})
     //merging
