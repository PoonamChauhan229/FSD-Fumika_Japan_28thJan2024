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
//MULTER > FILE/IMAGE UPLOAD
// we want some data to be sent out >> what method would be used >> POST
const multer=require('multer')
//in which folder, i want all the images to be shown up
const upload=multer({
    dest:"images/"
})

app.post('/uploadprofile',upload.single('avatar'),(req,res)=>{
    res.send("File uploaded Successfully")
})

// API URLS
app.use(taskRoute)
app.use(userRoute)

//Server Start
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})


