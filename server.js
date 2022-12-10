const mongoose = require("mongoose")
const express = require('express')
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 3500

require("dotenv").config()
const configureDB = require("./config/database")
configureDB()

app.use(cors())
app.use(express.json())

app.listen(PORT,()=>{
    console.log("PORT is connected on",PORT)
})