const Bed = require("../models/bedModel");

const bedsController = {}

bedsController.create = (req,res)=>{
    const body = req.body
    const bed = new Bed(body)
    bed.user = req.user._id
    bed.save()
        .then((bed)=>{
            res.json(bed)
        })
        .catch((err)=>{
            res.json(err)
        })
}

bedsController.list = (req,res)=>{
    Bed.find({user:req.user._id})
        .then((bed)=>{
            res.json(bed)
        })
        .catch((err)=>{
            res.json(err)
        })
}

bedsController.update = (req,res)=>{
    const body = req.body
    const id = req.params.id
    Bed.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidators:true})
        .then((bed)=>{
            res.json(bed)
        })
        .catch((err)=>{
            res.json(err)
        })
}

bedsController.show = (req,res)=>{
    const id = req.params.id
    Bed.findOne({_id:id,user:req.user._id})
        .then((bed)=>{
            res.json(bed)
        })
        .catch((err)=>{
            res.json(err)
        })
}

bedsController.destroy = (req,res)=>{
    const id = req.params.id
    Bed.findOneAndDelete({_id:id,user:req.user._id})
        .then((bed)=>{
            res.json(bed)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = bedsController