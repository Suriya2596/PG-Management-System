const jwt = require("jsonwebtoken")
const omit = require("lodash/omit")
const User = require("../models/userModel")

const authentication = (req,res,next)=>{
    const token = req.header("Authorization").split(" ")[1]
    try{
        const tokenData = jwt.verify(token,process.env.JWT_SECRET)
        User.findById(tokenData._id)
         .then((user)=>{
            const userData = omit(user,['password'])
            req.user = userData
            next()
         })
         .catch((err)=>{
            res.json({errors:"Invalidate Token",message:"invalidate Token"})
         })
    }catch(err){
        res.json({errors:"Invalidate Token",message:"Invalidate Token"})
    }
}

const authorization = (req,res,next)=>{
    if(req.user.role==="admin"){
        next()
    }else{
        res.json({notice:"Not allowed to access the link"})
    }
}

module.exports = {
    authentication,authorization
}