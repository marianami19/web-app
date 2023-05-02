const mongoose = require("mongoose");

const postSchema = new mongoose.schema({
    prodName: {
        type: String,
        required: true,

    }, quantity: {
        type: Number,
        required: true
    }, saleAmount: {
        type: Number,
        required: true
    },
})