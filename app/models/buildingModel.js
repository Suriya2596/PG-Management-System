const mongoose = require("mongoose")
const {Schema} = mongoose

const buildingSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true
    },
    floors:{
        type:Number,
        required:true
    },
    rooms:{
        type:Number,
        required:true
    },
    beds:{
        type:Number,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

const Building = mongoose.model("Building",buildingSchema)

module.exports = Building