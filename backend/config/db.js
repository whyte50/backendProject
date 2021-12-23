const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Project')
.then(() => {
    console.log('sucessfully connected to MongoDB Database')
}) .catch((err) => {
    console.log('failed to connect to MongoDB Database', err)
})