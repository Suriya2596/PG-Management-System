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

buildingController.update = (req,res)=>{
    const body = req.body
    const id = req.params.id 
    Building.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidators:true})
        .then((building)=>{
            res.json(building)
        })
        .catch((err)=>{
            res.json(err)
        })
}

buildingController.show = (req,res)=>{
    const id = req.params.id
    Building.findOne({_id:id,user:req.user._id})
        .then((building)=>{
            res.json(building)
        })
        .catch((err)=>{
            res.json(err)
        })
}

buildingController.destroy = (req,res)=>{
    const id = req.params.id
    Building.findOneAndDelete({_id:id,user:req.user._id})
        .then((building)=>{
            res.json(building)
        })
        .catch((err)=>{
            res.json(err)
        })
}


module.exports = buildingController