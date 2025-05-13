const Task = require("../model/taskModel");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

//POST
router.post("/addtask", auth, async (req, res) => {
 const taskData = new Task({
    ...req.body,
    owner: req.user._id,
  });
  await taskData.save();

  res.send({ taskData: taskData, message: "Task Created Successfully" });
});

//GET REQUEST
router.get("/task", auth, async (req, res) => {
  const match={}
  const sort={}
  //only filter about true || false will taken take care off...
  if(req.query.completed){// boolean true if(true)  || if(false)
    match.completed=req.query.completed==="true"// match.completed="true"
  }
  if(req.query.sortBy){
    const parts=req.query.sortBy.split(":")
    console.log(parts)
    sort[parts[0]]=(parts[1]=="asc"?1:-1)
    console.log(sort)
  }
    await req.user.populate({
      path:"taskRel",   
      match:match,// true  || boolean - it will automatically undersatnd it has to be fasle
      options:{
        limit:parseInt(req.query.limit),// in an number
        skip:parseInt(req.query.skip),//in an number  why becasue when u pass in a url it is a string
        sort:sort
      }
    })
  res.status(200).send({ TaskData: req.user.taskRel });
});

//GET_ TASK _ID
// get the data with taskid
// but  the data should be a sigined user

// signed user >> auth >> pass the token
// req.user._id of that signed user
// task_id , req.user._id >>> both needs to be verfied and then we will get the correct task otherwise null
router.get("/task/:id", auth, async (req, res) => {
  console.log(req.params.id); //task_id  // query parameters
  console.log(req.user._id); //user._id
  //findOne
  const getTask = await Task.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });
  //  console.log(getTask)
  res.send(getTask);
});

//UPDATE
router.put("/task/:id", auth, async (req, res) => {
  try {
    console.log("Update Task by ID", req.params.id);
    //find both at the same time{user id (owner) + _id(taskId)}
    //what do you want update >>> req.body
    //{new:true,runValidators:true} >>>>> update by 1click
    const getTaskUpdate = await Task.findOneAndUpdate({ _id: req.params.id, owner: req.user._id },req.body,{ new: true, runValidators: true });
    if (!getTaskUpdate) {
      res.send({ message: "Task Not Found" });
    }
    res.send({ message: "Task Update completed", getTaskUpdate });
  } catch (e) {
    res.send({ message: "Some Internal Error" });
  }
});

//DELETE
router.delete('/task/:id',auth, async (req, res) => {
    try {
       console.log("Delete Task by ID",req.params.id)
       const deleteTask = await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
       if(!deleteTask) {
           res.send({ message: "Task Not Found" })
       }
           res.send({message:"Task has been deleted successfully",deleteTask})
   } catch (e) {
       res.send(
           { message: "Some Internal Error" }
       )}
})

module.exports = router;
