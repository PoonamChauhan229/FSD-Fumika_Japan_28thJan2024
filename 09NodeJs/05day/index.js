const express=require('express')
const connection=require('./db/connection')
const User=require('./model/userModel')
const Task=require('./model/taskModel')
const Movies=require('./model/moviesModel')
const app=express()
const PORT=8001

connection()
app.use(express.json())// middleware

// const moviesData = new Movies ({
//         movieposter:"https://c4.wallpaperflare.com/wallpaper/920/355/589/cihiro-disney-spirited-away-entertainment-movies-hd-art-wallpaper-preview.jpg",
//         moviename: "Spirited Away",
//         rating: 8.6,
//         summary: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
//         cast: "Rumi Hiiragi,Miyu Irino,Mari Natsuki,Takashi Naito,Yasuko Sawaguchi,Tsunehiko ,Takehiko Ono,Bunta Sugawara",
//         trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
//         publishYear: 2001,
//         likeNum: 4000,
//         dislikeNum: 1200,
//         genres: "Fantasy, Adventure and Animation.",
//         category: "Feel-good, Imaginative"
//     })
// moviesData.save()



// Home Page
app.get('/',(req,res)=>{
    res.send("Hello Express!!!")
})

// API URLS

//GET REQUEST
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


//GET_ ID
app.get('/users/:id',async(req,res)=>{
    // requesting the data through body >> req.body
    // requesting the data through query >> req.query
    //requesting the data through params >> req.params
    //Model.findById
    const getUser=await User.findById(req.params.id)
    res.send(getUser)
})

app.get('/task/:id',async(req,res)=>{
    const getTask=await Task.findById(req.params.id)
    res.send(getTask)
})

//POST

app.post('/adduser',async(req,res)=>{
    //req> request
    // ? req.query
    // req.body
    const userData= new User(req.body)
    userData.save()
    res.send(userData)

})

//
app.post('/addtask',async(req,res)=>{
    const taskData = new Task(req.body)
    taskData.save()
    res.send(taskData)

})
//movies

//UPDATE 

app.put('/users/:id',async(req,res)=>{
    //req.params
    //req.body
    const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateUser)

})

app.put('/task/:id',async(req,res)=>{
    const updateTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateTask)
})
//DELETE
app.delete('/user/:id',async(req,res)=>{
    const deleteUser=await User.findByIdAndDelete(req.params.id)
    res.send({
        deletedUser:deleteUser,
        message:"Deleted Successfully"
    })
})

app.delete('/task/:id',async(req,res)=>{
    const deletedTask=await Task.findByIdAndDelete(req.params.id)
    res.send({
        deleteTask:deletedTask,
        message:"Deleted Successfully"
    })
})



app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})


