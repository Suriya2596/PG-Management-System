const User = require("../models/userModel")
const usersController = {}
const bcryptjs = require("bcryptjs")
const _omit = require("lodash/omit")
const jwt = require("jsonwebtoken")


usersController.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    bcryptjs.genSalt(2)
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encryptedPassword) => {
                    user.password = encryptedPassword
                    user.save()
                        .then((userData) => {
                            const responseData = _omit(userData, ["password"])
                            res.json(responseData)
                        })
                        .catch((err) => {
                            res.json(err)
                        })
                })
        })
}

usersController.login = (req, res) => {
    const body = req.body
    User.findOne({ email: body.email })
        .then((user) => {
            if (user) {
                bcryptjs.compare(body.password, user.password)
                    .then((match) => {
                        if (match) {
                            const tokenData = {
                                _id: user._id,
                                userName: user.userName,
                                email: user.email,
                                mobile: user.mobile
                            }
                            const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "1d" })
                            res.json({ "tokenPG": `Bearer ${token}` })
                        } else {
                            res.json({ errors: "Invaliadte email or passwordd", message: "Invalidate Email or Password" })
                        }
                    })
                    .catch((err) => {
                        res.json({ errors: "Invaliadte email or passwordd", message: "Invalidate Email or Password" })
                    })
            } else {
                res.json({ errors: "Invaliadte email or passwordd", message: "Invalidate Email or Password" })
            }
        })
        .catch((err) => {
            res.json({ errors: "Invaliadte email or passwordd", message: "Invalidate Email or Password" })
        })
}

usersController.account = (req,res)=>{
    res.json(req.user)
}

module.exports = usersController