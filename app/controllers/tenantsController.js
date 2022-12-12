const Tenant = require("../models/tenantModel");

const tenantsController = {}

tenantsController.create = (req,res)=>{
    const body = req.body
    const tenant = new Tenant(body)
    tenant.user = req.user._id
    tenant.save()
        .then((tenantData)=>{
            res.json(tenantData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

tenantsController.list = (req,res)=>{
    Tenant.find({user:req.user._id})
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

tenantsController.update = (req,res)=>{
    const body = req.body
    const id = req.params.id
    Tenant.findOneAndUpdate({_id:id,user:req.user._id},body,{runValidators:true,new:true})
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}
tenantsController.updateRent = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Tenant.findOneAndUpdate({_id:id,user:req.user._id},{ $push:{ rentPaid:{ rentPrice:body.rentPrice,rentPaidDate:body.rentPaidDate } } },{new:true,runValidators:true})
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

tenantsController.show = (req,res)=>{
    const id = req.params.id
    Tenant.findOne({_id:id,user:req.user._id})
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

tenantsController.destroy = (req,res)=>{
    const id = req.params.id
    Tenant.findOneAndDelete({_id:id,user:req.user.id})
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = tenantsController