const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
// collectionName +schema 
// We have to seprate schema and collection

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    phone_number:{type:Number,required:true},
    email:{type:String,lowercase:true},
    password:{type:String,required:true}
},{
    timestamps:true
})

//schema + methods >> generate a token
//generateAuthToken >> userdefined Name >> referred as function  >> functionName is always userdefined >> annoymous function

userSchema.methods.generateAuthToken= async function(req,res){
    // sigin  >> response >> this keyword
    const user=this
    // console.log("UserSchema",user)
    //Generate a token
    const token=jwt.sign({_id:user._id},"nodejs")
    console.log(token)
    return token
}
//virtual Feild we will so that we conncet the collections
// taskRel >> developerDefined feildname
userSchema.virtual('taskRel',{
    ref:"Task",
    localField:"_id",//current model feild
    foreignField:"owner"//
})

const User=mongoose.model("User",userSchema)

module.exports=User


