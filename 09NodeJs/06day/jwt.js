console.log("jwt")
// import that package 
const jwt=require('jsonwebtoken')
console.log(jwt) // object
//{
//     decode: [Function (anonymous)],
//     verify: [Function (anonymous)], // ur token and secret key 
//     sign: [Function (anonymous)], // generate token   >sign()
//     JsonWebTokenError: [Function: JsonWebTokenError],
//     NotBeforeError: [Function: NotBeforeError],
//     TokenExpiredError: [Function: TokenExpiredError]
//   }

// sign >> generating the token 
// console.log(jwt.sign())

//sign in 
// 10 users
// identify the 10 users >> user_id  
// user_id 
// secret key >> fumika || nodejs || movieapp >>> userdefined key
// optional parameter >> expiry of that token
// payload   {email:"fumika@gmail.com"}
// secret key "fumika"
const token=jwt.sign({email:"fumika@gmail.com"},"fumika",{expiresIn:"7 days"})
console.log("Token",token)

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bWlrYUBnbWFpbC5jb20iLCJpYXQiOjE3MjM4ODY5MTksImV4cCI6MTcyNDQ5MTcxOX0.csRihKgVxn9_CkzauYJXM3vRCE6Hn6hhaA-K2w4iOZA