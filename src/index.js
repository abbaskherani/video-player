// require('dotenv').config({path: './env'}) //old method

import dotenv from 'dotenv' //new way
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js';
import connectDB from './db/db.js';

dotenv.config({ // new of dot env, add experimental in package.json -r dotenv/config --experimental-json-modules
    path : './env'
})

connectDB()
    .then(()=> {
        app.on("error", (error)=> {
            console.log("err:", error);
            throw error;
        })
        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`server is running at port ${process.env.PORT}`);
        })
    })
    .catch((err)=>{
        console.log("MONGO db connection failed !",err);
    })
//returns a promise





/* 1st approach by creating IIFE
//better approach is the 2nd one professional
import express from 'express';
const app = express();
;(async ()=>{ 
    //; just for cleaning purpose considering last line me kisi ne ; nhi lagaya hoga
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error)=> {
            console.log("err:", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error", error)
        throw err
    }
})()

*/