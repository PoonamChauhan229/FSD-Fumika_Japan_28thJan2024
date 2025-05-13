const Task = require("../model/taskModel");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

//POST
router.post("/addtask", auth, async (req, res) => {
  //token to be sendout to the postman
  //token > signin
  // console.log(req.user)//auth
  const taskData = new Task({
    ...req.body,
    owner: req.user._id,
  });
  await taskData.save();

  res.send({ taskData: taskData, message: "Task Created Successfully" });

  //Object short hand property || key:value same so just pass keyname..rest will be hand;ed by js
  // res.send({taskData,message:"Task Created Successfully"})
});

//GET REQUEST
router.get("/task", auth, async (req, res) => {
  //auth > token
  console.log(req.user._id);
  // user._id  >>
  // virtual feild taskRel >> populated...
  //populate(virtalFeildName)
  await req.user.populate("taskRel");
  // in the beg TaskREl is empty (just had a relationship)
  // populate(add the data to it)
  // inside the taskRel
  // req.user
  //populate >>
  res.send({ TaskData: req.user.taskRel });
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
