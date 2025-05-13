const User=require('../model/userModel')
const express=require('express')
const router=express.Router() 
const bcrypt=require('bcryptjs')
const auth=require('../middleware/auth')

//POST  >> SIGNUP  +  SIGNIN 
//A account already exists with this email address. Pls Sign in using it.
// /adduser  >> /signup
router.post('/signup',async(req,res)=>{  
    // any user email exists then, i shouldnt be able to create the user
   try{
    // check for an duplicate email address
    let user=await User.findOne({email:req.body.email})
    console.log(user)
    if(user){
        console.log("User is found",req.body.email)
        return res.send("User already exists")
    }
    // password hashing
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)
      
    const userData=new User({
        ...req.body,// making the copy of req.body 
        password: hashedPassword  // this one i need to update
    })
    await userData.save()
    res.send(userData)
    }
    catch(e){
        res.send("Some Error occured")
    }

})

// /signin route
router.post('/signin',async(req,res)=>{
    try{
    let user = await User.findOne({
    $and:[
        {email:req.body.email},
        {phone_number:req.body.phone_number}
    ]                
    })
    console.log("NewUser",user,req.body)
    const isMatch = await bcrypt.compare(req.body.password,user.password) //req.body.password >> When a user type, user.password >>> data from DB
    console.log(isMatch)
    if(isMatch && user){
        // Generate a token
        const token = await user.generateAuthToken()
        // console.log(token)
         res.send({
            user:user,
            token:token
        })    
     }
    }
    catch(e){
        res.send(
            {message:"Your login credentials are incrrect, kindly check and re-enter"}
        )
    }
})

//GET REQUEST
//ex: router.get('/users',>> server is down(middle ware is called)
//ex : router.post('/signin'>> server is down(middle ware is called)

//protectd route
// auth to be passes to those actually needs not to all
// router.get('/users' >> middle ware is called

//specific route , i will pass the middleware
// router.get('/users',middleware,()=>{})
//Profie Route >> User Specific Route
//authorization >>> 
router.get('/users/profile',auth,async(req,res)=>{
    console.log(req.token)
    console.log(req.user)
    const getProfile=await User.findById(req.user._id)
    res.send(getProfile)
})

//Profile >> Edit and update our profile || protected route
//Profile >> Remove || Delete our profile
//UPDATE 
router.put('/users/profile',auth,async(req,res)=>{
   try{
     //auth >> Bearer token >> header > authorization
     console.log("Update Profile Id",req.user._id)// auth ? why will i pass from url
     //req.params
     //req.body
     if(req.body.password){
         const salt=await bcrypt.genSalt(10)
         const hashedPassword=await bcrypt.hash(req.body.password,salt)
         req.body.password=hashedPassword
     }
     const updateUser=await User.findByIdAndUpdate(req.user._id,req.body,{new:true,runValidators:true})
     if(updateUser){
         res.send(updateUser)
     }else{
         res.send({message:"User Not Found, hence cant be updated"})
     }
   }catch(e){
    res.send("Some Internal Error")
   }
})

//DELETE
router.delete('/user/profile',auth,async(req,res)=>{
    const deleteUser=await User.findByIdAndDelete(req.user._id)
    res.send({
        deletedUser:deleteUser,
        message:"Deleted Successfully"
    })
})


//upload image
const multer=require('multer')
const upload=multer({
    dest:"profileImages/",
    limits:{
        fileSize:10000000 //1 MB
    },
    fileFilter(req,file,cb){
        console.log(file.originalname)//give the exact name of the file which are uploading
        let fileNameVal=file.originalname.endsWith(".jpg")||file.originalname.endsWith(".jpeg")||file.originalname.endsWith(".png")
        console.log(fileNameVal)
        if(fileNameVal){// if(true)
            console.log("File is uploaded")
        }else{
            //error
            console.log("Please upload a correct file")
            return cb(new Error("Please upload a correct file")) // throw new Error("")
        }
        cb(undefined,true)// cb(null, true)
    }
})
router.post('/user/profile/upload',upload.single('avatar'),(req,res)=>{
    res.send({message:"File Uploaded Successfully"})
},(error,req,res,next)=>{//error:{message}
    res.send({showError:error.message})
})

module.exports=router