const mongoose=require('mongoose')
//localhost >> localsystem
mongoose.connect("mongodb://127.0.0.1:27017/fumika01_mongoose")
//user database
// user > name age
//User ModelName
//collection > create
const User=mongoose.model("User",{
    name:{type:String,required:true},
    age:{type:Number,required:true},
    phone_number:{type:Number,required:true},
    email:{type:String,lowercase:true},
    registered:{type:Boolean,default:false,required:true}
})
//USER > REQUIRED:TRUE EXITING 
//USER > LOWERCASE:TRUE
//USER > DEFAULT 

const userData= new User({
    name:"Fumika07",
    age:27,
    phone_number:9886564567,
    email:"FUMIKA07@GMAIL.COM"
})
const connection=async()=>{
    const res=await userData.save()
    console.log(res,"Added to DB")
}
connection()

// mongodb with node

// express with node

// mongodb express with node
