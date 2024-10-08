const Task=require('../model/taskModel')
const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth')

//POST
router.post('/addtask',auth,async(req,res)=>{
    //token to be sendout to the postman
    //token > signin
   // console.log(req.user)//auth
    const taskData = new Task({
        ...req.body,
        owner:req.user._id
    })
    await taskData.save()
    
    res.send({taskData:taskData,message:"Task Created Successfully"})

    //Object short hand property || key:value same so just pass keyname..rest will be hand;ed by js
    // res.send({taskData,message:"Task Created Successfully"})
})


//GET REQUEST
router.get('/task',auth,async(req,res)=>{
//auth > token
console.log(req.user._id)
// user._id  >> 
// virtual feild taskRel >> populated...
//populate(virtalFeildName)
await req.user.populate('taskRel')
// in the beg TaskREl is empty (just had a relationship)
// populate(add the data to it)
// inside the taskRel
// req.user
//populate >>
res.send({"TaskData":req.user.taskRel})

})

//GET_ ID
// edit and update but with the specific data
router.get('/task/:id',async(req,res)=>{
     try{
        const getTask=await Task.findById(req.params.id)
        if(getTask){
            res.send(getTask)
        }
        res.send({message:"Task Not Found"})
    }catch(e){
        // console.log(e.reason)
        res.send(
            {message1:"Some Internal error"}
            
        )
    }
    
})


//UPDATE 
router.put('/task/:id',async(req,res)=>{
    const updateTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(updateTask){
       return res.send(updateTask)
    }
    res.send({message:"Task Not Found, hence unable to update"})
      
})

//DELETE
router.delete('/task/:id',async(req,res)=>{
    const deletedTask=await Task.findByIdAndDelete(req.params.id)
    if(deletedTask){
        res.send({
            deleteTask:deletedTask,
            message:"Deleted Successfully"
        })
    }
    res.send({message:"Task Does not Exists, Hopefully its Deleeted Kindly recheck"})
    
})

module.exports=router