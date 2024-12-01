import express from 'express';
import mongoose from 'mongoose'
import connectDB from './db/db.js';
import 'dotenv/config'

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000 , () => {
        console.log(`Server is running at ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed", err)
})