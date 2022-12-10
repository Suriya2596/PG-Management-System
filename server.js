const mongoose = require("mongoose")
const express = require('express')
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 3500
const configureDB = require("./config/database")
const routes = require("./config/routes")

require("dotenv").config()

configureDB()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT,()=>{
    console.log("PORT is connected on",PORT)
})