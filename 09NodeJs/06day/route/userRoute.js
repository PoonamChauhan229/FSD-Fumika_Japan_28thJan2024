const User=require('../model/userModel')
const express=require('express')
const router=express.Router() 
const bcrypt=require('bcryptjs')

//POST  >> SIGNUP  +  SIGNIN 
//A account already exists with this email address. Pls Sign in using it.
// /adduser  >> /signup
router.post('/adduser',async(req,res)=>{  
    // any user email exists then, i shouldnt be able to create the user
    try{
    // check for an duplicate email address
    let user=await User.findOne({email:req.body.email})
    console.log(user)
    if(user){
        console.log("User is found",req.body.email)
        return res.send("User already exists")
    }
    // password hashing
    const salt=await bycrypt.genSalt(10)
    const hashedPassword=await bycrypt.hash(req.body.password,salt)

    // adding a new user +
    //const userData=new User(req.body) // >> Password hashed 

    // const userData= new User({
    //     name: req.body.name,
    //     age: req.body.age,
    //     phone_number: req.body.phone_number,
    //     email: req.body.email,
    //     registered: req.body.registered,
    //     password: hashedPassword
    // })
        
    const userData=new User({
        ...req.body,// making the copy of req.body 
        password: hashedPassword  // this one i need to update
    })
    userData.save()
    res.send(userData)
    }
    catch(e){
        res.send("Some Error occured")
    }

})

// /signin route
router.post('/signin',async(req,res)=>{
    try{
    let user = await User.findOne({
    $and:[
        {email:req.body.email},
        {phone_number:req.body.phone_number}
    ]                
    })
    // console.log("NewUser",user)
    const isMatch = await bcrypt.compare(req.body.password,user.password) //req.body.password >> When a user type, user.password >>> data from DB
    // console.log(isMatch)
    if(isMatch && user){
        // Generate a token
        const token = await user.generateAuthToken()
        // console.log(token)
         res.send({
            user:user,
            token:token
        })    
     }
    }catch(e){
        res.send(
            {message:"Your login credentials are incrrect, kindly check and re-enter"}
        )
    }
})

//GET REQUEST
router.get('/users',async(req,res)=>{
    // db.collectionName.find({})
    //User.find({})
    const getAllUsers=await User.find({})
    res.send(getAllUsers)
})

//GET_ ID
router.get('/users/:id',async(req,res)=>{
    // requesting the data through body >> req.body
    // requesting the data through query >> req.query
    //requesting the data through params >> req.params
    //Model.findById
    const getUser=await User.findById(req.params.id)
    res.send(getUser)
})



//UPDATE 
router.put('/users/:id',async(req,res)=>{
    //req.params
    //req.body
    const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateUser)

})

//DELETE
router.delete('/user/:id',async(req,res)=>{
    const deleteUser=await User.findByIdAndDelete(req.params.id)
    res.send({
        deletedUser:deleteUser,
        message:"Deleted Successfully"
    })
})

module.exports=router