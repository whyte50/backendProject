const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
       type:String,
        required:true,
        unique:true,

    },
    password:{
       type:String,
       required:true,
       min:3,
       max:10
    },
    token : {
        type:String,
        required:true
    },
    sessionData : {
        type:String
    }
});

const User = mongoose.model('userModel', userSchema);
module.exports = User