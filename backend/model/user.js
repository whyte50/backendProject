const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
    
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
       type: String,
        required: true,
        unique: true,

    },
    password:{
       type: String,
       required: true,
    }
});

// HASH PASSWORD
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = mongoose.model('userModel', userSchema);
module.exports = User