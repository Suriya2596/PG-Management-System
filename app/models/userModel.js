const mongoose = require("mongoose")
const {Schema} = mongoose
const isEmail = require("validator/lib/isEmail")
const isNumeric = require("validator/lib/isNumeric")


const userSchema = new Schema({
    userName:{
        type:String,
        required:[true,"User name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return "Email is invalidate"
            }
        }
    },
    mobile:{
        type:String,
        required:[true,"Mobile is required"],
        unique:true,
        maxlength:10,
        minlength:10,
        validate:{
            validator:function(value){
                return isNumeric(value)
            },
            message:function(){
                return "Mobile is invalidate formate"
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:128
    },
    role:{
        type:String,
        default:"user"
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema)

module.exports = User