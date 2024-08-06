const express=require('express')
const connection=require('./db/connection')
const User=require('./model/userModel')
const Task=require('./model/taskModel')
const Movies=require('./model/moviesModel')
const app=express()
const PORT=8001

connection()
const userData= new User({
    name:"Fumika107",
    age:27,
    phone_number:9886564567,
    email:"FUMIKA107@GMAIL.COM"
})
userData.save()

const moviesData = new Movies ({
        movieposter:"https://c4.wallpaperflare.com/wallpaper/920/355/589/cihiro-disney-spirited-away-entertainment-movies-hd-art-wallpaper-preview.jpg",
        moviename: "Spirited Away",
        rating: 8.6,
        summary: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
        cast: "Rumi Hiiragi,Miyu Irino,Mari Natsuki,Takashi Naito,Yasuko Sawaguchi,Tsunehiko ,Takehiko Ono,Bunta Sugawara",
        trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
        publishYear: 2001,
        likeNum: 4000,
        dislikeNum: 1200,
        genres: "Fantasy, Adventure and Animation.",
        category: "Feel-good, Imaginative"
    })
moviesData.save()

const taskData = new Task({
    task_name: "Dance lesson",
    user_name: "Mary",
    description: "Every wednesday at 10:00am",
    duration:"2",
    location:"Tokyo Station",
    date:10_08_2024,
    completed:true,
})
taskData.save()

// Home Page
app.get('/',(req,res)=>{
    res.send("Hello Express!!!")
})

// API URLS
app.get('/users',async(req,res)=>{
    // db.collectionName.find({})
    //User.find({})
    const getAllUsers=await User.find({})
    res.send(getAllUsers)
})

app.get('/task',async(req,res)=>{
    const getAllTask=await Task.find({})
    res.send(getAllTask)
})

app.get('/movies',async(req,res)=>{
    const getAllMovies=await Movies.find({})
    res.send(getAllMovies)
})

app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})


