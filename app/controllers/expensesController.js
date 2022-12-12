const Expense = require("../models/expenseModel")

const expensesController = {}

expensesController.create = (req,res)=>{
    const body = req.body
    const expense = new Expense(body)
    expense.user = req.user._id
    expense.rooms.push({room:body.room})
    expense.save()
        .then((expenseData)=>{
            res.json(expenseData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.list = (req,res)=>{
    Expense.find({user:req.user._id})
        .then((expense)=>{
            res.json(expense)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Expense.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidators:true})
        .then((expense)=>{
            res.json(expense)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.show = (req,res)=>{
    const id = req.params.id
    Expense.findOne({_id:id,user:req.user._id})
        .then((expense)=>{
            res.json(expense)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.destroy = (req,res)=>{
    const id = req.params.id
    Expense.findOneAndDelete({_id:id,user:req.user.id})
        .then((expesnse)=>{
            res.json(expesnse)
        })
        .catch((err)=>{
            res.json(err)
        })
}


module.exports = expensesController