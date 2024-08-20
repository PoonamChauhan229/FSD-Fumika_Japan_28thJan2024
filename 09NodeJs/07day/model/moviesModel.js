const mongoose=require('mongoose')

const moviesSchema=new mongoose.Schema({
    movieposter:{type:String,required:true},
    moviename:{type:String,required:true,lowercase:true},
    rating:{type:Number,required:true,default:7},
    summary:{type:String,default:false},
    cast:{type:String,default:"Scarlett Johansson"},
    trailer:{type:String,required:true},
    publishYear:{type:Number,default:2024},
    likeNum:{type:Number,required:true},
    dislikeNum:{type:Number,required:true},
    genres:{type:String,default:"comedy"},
    category:{type:String,default:"family film"}
})

const Movies=mongoose.model("Movies",moviesSchema)
module.exports=Movies