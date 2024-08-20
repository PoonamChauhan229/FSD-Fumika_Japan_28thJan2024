const mongoose=require('mongoose')

const connection=async()=>{
  // console.log(process.env.MONGO_URL)
   await mongoose.connect(process.env.MONGO_URL)   


   console.log("We are connected to Mongodb")

}
// connection()
module.exports =connection;


// Project 
// db     >connection.js
// model  > modelNamefile.js
// routes 
// index.js
// backend > businness logics
// front end > 20 logic + 80 designing(" again and again ") >> MUI + bootstrap + fix up with the basic core 