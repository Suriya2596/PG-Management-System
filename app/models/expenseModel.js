const mongoose = require("mongoose")
const {Schema} = mongoose

const expenseSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:[true,"user is required"]
    },
    building:{
        type:Schema.Types.ObjectId,
        ref:"Building",
        required:[true,"Building is required"]
    },
    rooms:[{
        room:{
            type:Schema.Types.ObjectId,
            ref:"Room"
        }
    }],
    title:{
        type:String,
        required:[true,"title is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    },
    date:{
        type:Date,
        required:[true,"Date is Requied"]
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Expense = mongoose.model("Expense",expenseSchema)

module.exports = Expense