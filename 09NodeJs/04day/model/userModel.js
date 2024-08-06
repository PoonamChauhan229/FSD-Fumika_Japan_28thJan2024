const mongoose=require('mongoose')
// collectionName +schema 
// We have to seprate schema and collection

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    phone_number:{type:Number,required:true},
    email:{type:String,lowercase:true},
    registered:{type:Boolean,default:false,required:true}
})

const User=mongoose.model("User",userSchema)

module.exports=User


