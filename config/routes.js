const express = require("express")
const routes = express.Router()
const usersController = require("../app/controllers/usersController")

routes.post("/api/user/register",usersController.register)
routes.post("/api/user/login",usersController.login)

module.exports = routes