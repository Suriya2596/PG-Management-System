const mongoose = require('mongoose')
const {Schema} = mongoose

const roomSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    building:{
        type:Schema.Types.ObjectId,
        ref:"Building",
        required:true
    },
    roomsNo:{
        type:String,
        required:true
    },
    floorNo:{
        type:String,
        required:true
    },
    noOfBeds:{
        type:Number,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Room = mongoose.model("Room",roomSchema)

module.exports = Room