const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
    task_name: {type:String,required:true,uppercase:true},
    description:{type:String,required:false,lowercase:true},
    completed:{type:Boolean,required:true},
    owner:{// user_id
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",// refer to User Model
        required:true
    }
},
{
    timestamps:true
})


const Task= mongoose.model("Task",taskSchema)
module.exports=Task;