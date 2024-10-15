const mongoose = require('mongoose');

const signUpData = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            enum:["MALE","FEMALE","OTHER"]
        },
        email:{
            type:String,
            required:true,
        }
})
module.exports = mongoose.model("signUp",signUpData);