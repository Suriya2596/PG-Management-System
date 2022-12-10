const mongoose = require("mongoose")

const configureDB = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/pgmanagement")
        .then(()=>{
            console.log("connected to database")
        })
        .catch(()=>{
            console.log("not connected to database")
        })
}

module.exports = configureDB