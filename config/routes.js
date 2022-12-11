const express = require("express")
const routes = express.Router()

const {authentication,authorization} = require("../app/middlewares/authentication")
const usersController = require("../app/controllers/usersController")


routes.post("/api/user/register",usersController.register)
routes.post("/api/user/login",usersController.login)
routes.get("/api/user",authentication,usersController.account)
routes.put("/api/user",authentication,usersController.update)
routes.delete("/api/user",authentication,authorization,usersController.destroy)


module.exports = routes