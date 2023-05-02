const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,

    }, email: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: true
    },

})

mongoose.model("UserModel", user_schema)