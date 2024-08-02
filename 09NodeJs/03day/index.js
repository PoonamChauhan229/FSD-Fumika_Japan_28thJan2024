const express=require('express')
const app=express()
//console.log(app)
//using expresss, we have to  configure the server

// moviestation-3.com
//moviestatation-3.com/allmovies
//moviestation-3.com/about
//moviestation-3.com/home
// .... many more pages we have right

// routing 

//moviestation-3.com > root route 
// mutliple routes
/*
 /about
 /home
 /allmovies
*/
// route 
//using app ,we will set up first route
//app.get()
// app.get(url,(req,res)=>{
//req >> incoming request from the client side to the server
//res >> Its read the data from the database and give the response , using this response we create some HTML page

    //})
//   /  >>> Home Page
app.get('/',(req,res)=>{
    // res.send("Hello Express!!!")
    res.send('<h1>Hello Express!!!</h1>')
})
app.get('/help',(req,res)=>{
    // res.send("Welcome to Help Page") //STRING _TEXT response
    
    // res.send("<h2>Welcome to Help Page</h2>") //HTML response
    
    // res.send({                               // object response
    //     name:"Fumika",
    //     place:"Japan"
    // })

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
// start the server
//app.listen()
// PORT NO : At what i should start the server || server PORT when we work local, we provide it
//()=>{console.log("Server is started")}
const PORT=8000
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})

// project > 7 steps >> create a one 
// yesterday 02 empty project
// create the route and as well u have to start the server
// / > Homepage  > html res
// /about    > object res
// /weather  > array of objects res

//https://api.openweathermap.org/data/2.5/weather?q=India&appid=68efa0885519a6f01d76917c463ada68
//https://api.openweathermap.org/data/2.5/weather
//http://localhost:8000/weather

//?q=India&appid=68efa0885519a6f01d76917c463ada68
//Query String || Query Paramaters
// ?key=value&key1=value1
// ?search=games&rating=5
// request > in form of query string >> u give me the india weather details 


// /weather >> res.send({"country":"india","forecast":"Cloudy"},{"country":"USA","forecast":"moist"})
// req.query
