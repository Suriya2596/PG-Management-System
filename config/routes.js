const express = require("express")
const routes = express.Router()

const {authentication,authorization} = require("../app/middlewares/authentication")
const usersController = require("../app/controllers/usersController")
const buildingController = require("../app/controllers/buildingController")

routes.post("/api/user/register",usersController.register)
routes.post("/api/user/login",usersController.login)
routes.get("/api/user",authentication,usersController.account)
routes.put("/api/user",authentication,usersController.update)
routes.delete("/api/user",authentication,authorization,usersController.destroy)

routes.post("/api/user/building",authentication,buildingController.create)
routes.get("/api/user/building",authentication,buildingController.list)

module.exports = routes