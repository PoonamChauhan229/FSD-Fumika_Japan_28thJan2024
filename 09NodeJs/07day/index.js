const express=require('express')
const connection=require('./db/connection')
const taskRoute=require('./route/taskRoute')
const userRoute=require('./route/userRoute')
const app=express()
const cors=require('cors')
//dotenv
const dotenv=require('dotenv')
dotenv.config()
app.use(cors())

const PORT=process.env.PORT

connection()
app.use(express.json())// middleware

// Home Page
app.get('/',(req,res)=>{
    res.send("Hello Express!!!")
})

//registerred a middleware
// 
// app.use((req,res,next)=>{
//     console.log(req.method)
//     res.send(req.method)
// })

// app.use((req,res,next)=>{
//     console.log(req.method)
//     res.send({mesaage:"Site is currently Down!!! REVISIT AFTER SOMETIME"})
// })

// API URLS
app.use(taskRoute)
app.use(userRoute)

//Server Start
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})


