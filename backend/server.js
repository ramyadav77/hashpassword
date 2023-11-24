import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import route from './routes/userRoute.js';


const app =express();

app.use(bodyparser.json());

const PORT=3000;
const URL="mongodb://127.0.0.1:27017/hashpassworddatabse"
mongoose.connect(URL).then(()=>{
    console.log("db connected successfully");
    app.listen(PORT,()=>{
        console.log(`app is running on port:${PORT}`)
    })
}).catch(error=>console.log(error))

app.use("/api/user",route)