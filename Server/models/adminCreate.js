const mongoose = require('mongoose')


const adminSignUp = new mongoose.Schema({
   email:{
        type:String,
         required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})
module.exports = mongoose.model('Admin', adminSignUp)