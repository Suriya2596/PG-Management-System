const Room = require("../models/roomModel")

const roomsController = {}

roomsController.create = (req, res) => {
    const body = req.body
    const room = new Room(body)
    room.user = req.user._id
    room.save()
        .then((roomData)=>{
            res.json(roomData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

roomsController.list = (req,res)=>{
    Room.find({user:req.user._id})
        .then((rooms)=>{
            res.json(rooms)
        })
        .catch((err)=>{
            res.json(err)
        })
}

roomsController.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Room.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidators:true})
        .then((room)=>{
            res.json(room)
        })
        .catch((err)=>{
            res.json(err)
        })
}

roomsController.show = (req,res)=>{
    const id = req.params.id
    Room.findOne({_id:id,user:req.user.id})
        .then((room)=>{
            res.json(room)
        })
        .catch((err)=>{
            res.json(err)
        })
}

roomsController.destroy = (req,res)=>{
    const id = req.params.id
    Room.findOneAndDelete({_id:id,user:req.user._id})
        .then((room)=>{
            res.json(room)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = roomsController