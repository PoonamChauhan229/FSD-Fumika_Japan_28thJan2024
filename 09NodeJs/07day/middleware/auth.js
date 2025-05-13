const jwt=require('jsonwebtoken')
const User = require('../model/userModel')
const auth=async(req,res,next)=>{
    console.log("Auth Middleware is called")

    //auth >> token >> to only access specif user
//     Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. 
//The content of the header should look like the following:

// Authorization: Bearer <token>
// This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources. If the JWT contains the necessary data, the need to query the database for certain operations may be reduced, though this may not always be the case.
    console.log(req.header('Authorization'))
    // replace()
    console.log(req.header('Authorization').replace("Bearer ",""))

    const token=req.header('Authorization').replace("Bearer ","")
    // verify with the scretkey
    
    const decode=jwt.verify(token,"nodejs")
    console.log(decode)// verification is succesfull
    //{ _id: '66c1b9a16743d172fe7c36dd', iat: 1724147163 }
    req.token=token
    // _id: Object Id of the sepecific user
    // can we find out the user wrt _id ? yes 
    const user=await User.findOne({_id:decode._id})
    //console.log(user)
    req.user=user//{}
   next()// auth middle ware is succesfully exceuted ... u pls pass the control for further execution
}
module.exports=auth