const Building = require("../models/buildingModel")
const buildingController = {}

buildingController.create = (req,res)=>{
    const body = req.body
    const building = new Building(body)
    building.user = req.user._id
    building.save()
        .then((buildingData)=>{
            res.json(buildingData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

buildingController.list = (req,res)=>{
    Building.find({user:req.user._id})
        .then((buildings)=>{
            res.json(buildings)
        })
        .catch((err)=>{
            res.json(err)
        })
}


module.exports = buildingController