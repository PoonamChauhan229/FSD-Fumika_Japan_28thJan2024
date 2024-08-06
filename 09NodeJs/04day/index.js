const express=require('express')
const connection=require('./db/connection')
const User=require('./model/userModel')
const Task=require('./model/taskModel')
const Movies=require('./model/moviesModel')
const app=express()

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

//   /  >>> Home Page
app.get('/',(req,res)=>{
    // res.send("Hello Express!!!")
    res.send('<h1>Hello Express!!!</h1>')
})
app.get('/help',(req,res)=>{
    res.send([                                 // array of objects response
                {name:"Fumika",hobbies:"Reading"},
                {name:"Poonam",hobbies:"Dancing"},
                {name:"Alice",hobbies:"Eating"},
                {name:"John",hobbies:"Reading"},
                {name:"Eve",hobbies:"Swimming"},
                {name:"Bob",hobbies:"Surfuring"}
            ])
})
app.get('/weather',(req,res)=>{
    console.log(req.query)
    if(!req.query.country){
        res.send({
            "cod":401,
            "message":"Inavlid Query Params, Pls refer and enter the correct params",
            "error":"No address Found? Pass an address"
        })
    }else{
        res.send(
            {"country":req.query.country,"forecast":"Cloudy","rating":req.query.rating ||5}
        )
    }
   
})
const PORT=8001
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})


