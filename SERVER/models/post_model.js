const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

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
    }, user: {
        type: ObjectId,
        ref: "UserModel"
    }
})

mongoose.model("PostModel", postSchema)