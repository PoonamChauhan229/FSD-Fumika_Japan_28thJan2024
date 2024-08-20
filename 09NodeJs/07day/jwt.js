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
let secret_key="fumika"
const token=jwt.sign({email:"fumika@gmail.com"},secret_key,{expiresIn:"7 days"})
console.log("Token",token)

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bWlrYUBnbWFpbC5jb20iLCJpYXQiOjE3MjM5NzAwMDAsImV4cCI6MTcyNDU3NDgwMH0.i1nK86Z4huogm5tqbM6XFQHKbAObLefXpj9GWMP7Zq8

// verify the token
// .verify() >> 2 args > token generated , secret_key
token,secret_key
const data1=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bWlrYUBnbWFpbC5jb20iLCJpYXQiOjE3MjM5NzAwMDAsImV4cCI6MTcyNDU3NDgwMH0.i1nK86Z4huogm5tqbM6XFQHKbAObLefXpj9GWMP7Zq8","fumika")
console.log("data1",data1)

// data { email: 'fumika@gmail.com', iat: 1723970000, exp: 1724574800 }
// iat :issued at time
// exp :expiry

const data2=jwt.verify()
console.log("data2",data2)


// 4-5 functions
// annoymous function 
// no name
// store into a varaible

//ideal function
function add(){
    console.log(2+2)
}
add()

let sum=async function(){
    console.log(2+2)
}
sum()