const mongoose=require('mongoose')
// local_mogo_url=mongodb://127.0.0.1:27017/fumika01_mongoose
// cloud_mongo_url=mongodb+srv://poonam:poonam@cluster0.lukkhw2.mongodb.net/fumika01_mongoose

const connection=async()=>{
   await mongoose.connect("mongodb://127.0.0.1:27017/fumika01_mongoose")
   // await mongoose.connect("mongodb+srv://poonam:poonam@cluster0.lukkhw2.mongodb.net/fumika01_mongoose")
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