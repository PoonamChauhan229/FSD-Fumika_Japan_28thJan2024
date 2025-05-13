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
//task?completed=true
//task?complete=false
//tasks?limit=10 >> pagination || u decide per page how many response u want >> Google has decided 9 response

// 5 response per page but task shoukd completed
// ?completed=true
// ?limit=5                        >> mongoose-- options:{limit:5}
// ?completed=true&limit=5

//skip 
// ?skip=4 // skip the first 4     >> mongoose-- options:{skip:4}

// 5 response per page but task should completed(true) you have skip first 5
// ?completed=true
// ?limit=5 
// ?skip=5

//?completed=true&limt=5&skip=5

// sort :{}
// desc (-1)|| asc (1)
// completed:1 || asc order ||t,f >>f
// createdAt
// ?sortBy=createdAt:asc // keep on changing || ?sortBY=feildname:asc || ?sortBY=feildname:asc 
// ?sortBy=createdAt:desc

//filtering the task by passing the query string
//20 task
router.get("/task", auth, async (req, res) => {
  //query string >> in string || when we pass it is boolean , we have to convert into string
  console.log(req.query.completed)
  console.log(req.query.limit)//5
  console.log(req.query.skip)//8
  console.log(req.query.sortBy)
  const match={}
  const sort={}
  //only filter about true || false will taken take care off...
  if(req.query.completed){// boolean true if(true)  || if(false)
    match.completed=req.query.completed==="true"// match.completed="true"
  }
  console.log("match.completed",match.completed);

  //sort 
  console.log(req.query.sortBy)//createdAt:asc
  if(req.query.sortBy){
    const parts=req.query.sortBy.split(":")
    console.log(parts)
    sort[parts[0]]=(parts[1]=="asc"?1:-1)
    console.log(sort)
  }
  //auth > token
  console.log(req.user._id);
  // user._id  >>
  // virtual feild taskRel >> populated...
  //populate(virtalFeildName)
  // await req.user.populate("taskRel"); //await req.user.populate({path:"taskRel"})
  // populate({path:"",match:{},options:{}})
    await req.user.populate({
      path:"taskRel",  
      // match is taking an object  >> mongodb agg method
      // match:{
      //   completed:true
      //   completed:req.query.completed
      // }    
      match:match,// true  || boolean - it will automatically undersatnd it has to be fasle
      options:{
        limit:parseInt(req.query.limit),// in an number
        skip:parseInt(req.query.skip),//in an number  why becasue when u pass in a url it is a string
     
        // sort:{
        //  completed:-1 //1 and -1
        //   // createdAt:-1 //1 and -1
        // }
        sort:sort
      
       
      }
    })
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
