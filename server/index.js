import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect("mongodb+srv://solomonhelina78:12348109@e-commerce.vm5aylr.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce").then(()=> {
    console.log("Connected to Mongo")
}).catch ((err) => {
    console.log(err)
})

const app = express()
app.use('/server/user', userRouter)
app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})