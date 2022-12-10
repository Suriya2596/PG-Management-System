const express = require("express")
const routes = express.Router()

const {authentication,authorization} = require("../app/middlewares/authentication")
const usersController = require("../app/controllers/usersController")



routes.post("/api/user/register",usersController.register)
routes.post("/api/user/login",usersController.login)
routes.get("/api/user/account",authentication,usersController.account)

module.exports = routes