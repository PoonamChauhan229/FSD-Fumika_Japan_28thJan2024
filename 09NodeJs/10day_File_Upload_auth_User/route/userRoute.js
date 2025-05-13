const User=require('../model/userModel')
const express=require('express')
const router=express.Router() 
const bcrypt=require('bcryptjs')
const auth=require('../middleware/auth')
const sharp=require('sharp')
const sendCancellationEmail=require('../emails/sendCancellationEmail')

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
        return res.send("User already exists")// not an sucess response ==> client side error
    }
    // password hashing
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)
      
    const userData=new User({
        ...req.body,// making the copy of req.body 
        password: hashedPassword  // this one i need to update
    })
    await userData.save()
    res.status(201).send(userData)
    }
    catch(e){
        res.send("Some Error occured") // Some internal error
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
       return  res.status(200).send({
            user:user,
            token:token
        })    
     }
     res.status(401).send("check the credentials")
    }
    catch(e){
        res.status(500).send(
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
    console.log(req.user)
    const deleteUser=await User.findByIdAndDelete(req.user._id)
    console.log(req.user.email,req.user.name)
    // sendCancellationEmail()   
    if(deleteUser){
        sendCancellationEmail(req.user.email,req.user.name)
    }
    res.send({
       deletedUser:deleteUser,
        message:"Deleted Successfully and Email Cancellation also sent"
    })
})


//upload image
const multer=require('multer')
const upload=multer({
    //dest:"profileImages/",// upload in  Db this wont be there
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
            return cb(new Error("Please upload a correct file"))
        }
        cb(undefined,true)
    }
})

//update + add a profile image
router.post('/user/profile/upload',auth,upload.single('avatar'),async(req,res)=>{
  try{
    const buffer=await sharp(req.file.buffer).resize({width:250,height:300}).png().toBuffer()
    // req.user.avatar=req.file.buffer// directly updating 
    req.user.avatar=buffer
    await req.user.save()
    if(buffer){
        res.send({message:"File Uploaded Successfully"})
    }   
    // res.send(req.user)
    //req.file.buffer >> hold the binary data
  }catch(e){
    console.log(e)
  }
},(error,req,res,next)=>{
    res.send({showError:error.message})
})

//delete the profile image
//delete method
//user specfic > auth > middleware || image >> multer middleware
router.delete('/user/profile/upload',auth,upload.single('avatar'),async(req,res)=>{
    // req.user// auth
    // res.send(req.user.avatar)
    req.user.avatar=undefined
    await req.user.save()// save to db
    console.log(req.user.avatar)
    res.send({
        "user":req.user,
        "message":"Profic Pic Deleted Successfully"
    })
})
//get the profile image >>avatar
//get Method
router.get('/user/profile/upload',auth,upload.single('avatar'),async(req,res)=>{
    // req.user.avatar
    // set >> image/png
    res.set("Content-Type","image/png")
    res.send(req.user.avatar)
})


module.exports=router

//image
//add the image
//update the image
//delete the image
//get the image
//resize the image

//how can our nodejs/express helps to send the emails
