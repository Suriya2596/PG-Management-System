const mongoose = require("mongoose")
const { Schema } = mongoose

const bedSchema = new Schema({
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
    room:{
        type:Schema.Types.ObjectId,
        ref:"Room",
        required:true
    },
    bedNo:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Bed = mongoose.model("Bed",bedSchema)

module.exports = Bed