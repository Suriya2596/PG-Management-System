const express = require("express")
const routes = express.Router()

const {authentication,authorization} = require("../app/middlewares/authentication")
const usersController = require("../app/controllers/usersController")
const buildingController = require("../app/controllers/buildingController")
const roomsController = require("../app/controllers/roomsController")
const bedsController = require("../app/controllers/bedsController")

routes.post("/api/user/register",usersController.register)
routes.post("/api/user/login",usersController.login)
routes.get("/api/user",authentication,usersController.account)
routes.put("/api/user",authentication,usersController.update)
routes.delete("/api/user",authentication,authorization,usersController.destroy)

routes.post("/api/user/building",authentication,buildingController.create)
routes.get("/api/user/building",authentication,buildingController.list)
routes.put("/api/user/building/:id",authentication,buildingController.update)
routes.get("/api/user/building/:id",authentication,buildingController.show)
routes.delete("/api/user/building/:id",authentication,authorization,buildingController.destroy)

routes.post("/api/user/room",authentication,roomsController.create)
routes.get("/api/user/room",authentication,roomsController.list)
routes.put("/api/user/room/:id",authentication,roomsController.update)
routes.get("/api/user/room/:id",authentication,roomsController.show)
routes.delete("/api/user/room/:id",authentication,authorization,roomsController.destroy)

routes.post("/api/user/bed",authentication,bedsController.create)
routes.get("/api/user/bed",authentication,bedsController.list)
routes.put("/api/user/bed/:id",authentication,bedsController.update)
routes.get("/api/user/bed/:id",authentication,bedsController.show)
routes.delete("/api/user/bed/:id",authentication,authorization,bedsController.destroy)

module.exports = routes