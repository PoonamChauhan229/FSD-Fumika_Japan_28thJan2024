const User=require('../model/userModel')
const express=require('express')
const router=express.Router() 

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

//POST
router.post('/adduser',async(req,res)=>{
    //req> request
    // ? req.query
    // req.body
    const userData= new User(req.body)
    userData.save()
    res.send(userData)

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