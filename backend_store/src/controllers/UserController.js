const User = require("../models/User")
const bcrypt = require("bcrypt")
const { hashSync, genSaltSync } = require("bcrypt");
const jwt = require('jsonwebtoken')
require("dotenv").config();


const signUp = async (req, res) => {
    try{
        const body = req.body;

        const salt = genSaltSync(10);

        try {
            body.password = hashSync(body.password, salt);
        } catch (error) {
            res.json({
                message: "password error"
            })
        }

        let user = new User({
            username: body.username,
            password: body.password,
        })
        user.save()
        .then(response => {
            res.json({
            message: "Sign up is successfully"
            })
        })
    }catch(error){
        res.json({
            message: "Error"
        })
    }
}

const login = async(req, res, next) => {
    try{
        var username = req.body.username
        var password = req.body.password
        const isNewUser = await User.isThisUsernameUse(username)
        if (isNewUser) {
            return res.json({
                message: 'Id or password is invalid'
            })
        }
        User.findOne({$or: [{username: username}, {password: password}]})
            .then(user => {
                if(user){
                    bcrypt.compare(password, user.password, function(err, result){
                        if(err){
                            res.json({
                                error: err
                            })
                        }

                        if(result){
                            let token = jwt.sign({username: user.username, id: user._id}, process.env.JWT_KEY)
                            res.json({
                                message: 'Login Successful!',
                                token: token,
                            })
                        }else{
                            res.json({
                                message: "Id or password is invalid"
                            })
                        }
                    })
                }else{
                    res.json({
                        message: 'No User'
                    })
                }
            })
    }catch (error) {
        res.json({
          message: "Error"
        })
    }
}

module.exports = {
    signUp, login
}