const mongoose = require("mongoose")
const { Schema } = mongoose
const isNumeric = require("validator/lib/isNumeric")

const tenantSchema = new Schema({
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
    bed:{
        type:Schema.Types.ObjectId,
        ref:"Bed",
        required:true,
    },
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    mobile:{
        type:String,
        minlength:10,
        maxlength:10,
        required:[true,"Mobile is required"],
        validate:{
            validator:function(value){
                return isNumeric(value)
            },
            message:function(){
                return "Mobile number is not formatted"
            }
        }
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    aadarNumber:{
        type:String,
        required:[true,"aadar number is required"],
        minlength:16,
        maxlength:16
    },
    photo:{
        type:String,
        default:""
    },
    rent:{
        type:Number,
        required:[true,"Rent price is required"]
    },
    advance:{
        type:Number,
        required:[true,"Room Advance price is required"]
    },
    joiningDate :{
        type:Date,
        required:true
    },
    rentPaid:[
        {
         rentPrice:{
            type:Number,
            default:"",
            required:true
         },
         rentPaidDate:{
            type:Date,
            required:true,
            default:""
         }
        }
    ],
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Tenant = mongoose.model("Tenant",tenantSchema)

module.exports = Tenant