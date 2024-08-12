const User=require('../model/userModel')
const express=require('express')
const router=express.Router() 
const bycrypt=require('bcryptjs')

//POST  >> SIGNUP  +  SIGNIN 
//A account already exists with this email address. Pls Sign in using it.
// /adduser  >> /signup
router.post('/adduser',async(req,res)=>{
    //req> request
    // ? req.query
    // req.body
    // any user email exists then, i shouldnt be able to create the user
    try{
    const salt=await bycrypt.genSalt(10)
    const hashedPassword=await bycrypt.hash(req.body.password,salt)

    const userData= new User({
        name: req.body.name,
        age: req.body.age,
        phone_number: req.body.phone_number,
        email: req.body.email,
        registered: req.body.registered,
        password: hashedPassword
    })
    userData.save()
    res.send(userData)
    }
    catch(e){
        res.send("Some Error occured")
    }

})

// /signin route

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