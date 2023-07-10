const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
}, {timeseries: true})

userSchema.statics.isThisUsernameUse = async function (username) {
    if(!username) throw new Error('Invalid username')
    try{
        const user = await this.findOne({username})
        if(user) return false
    
        return true
    }catch (error){
        console.log('error inside isThisUsernameUse method ', error.message)
        return false
    }
}

const User = mongoose.model('user', userSchema)
module.exports = User