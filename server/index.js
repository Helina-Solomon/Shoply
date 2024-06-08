import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.js'
dotenv.config()
mongoose.connect("mongodb+srv://solomonhelina78:12348109@e-commerce.vm5aylr.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce").then(()=> {
    console.log("Connected to Mongo")
}).catch ((err) => {
    console.log(err)
})

const app = express()

//middleware
app.use(express.json())

app.use('/api/user', userRouter)

app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})

app.get('/test', (req, res)=> {
    res.send("hello")
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
