const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post_model = mongoose.model('PostModel');
const protectedRoute = require("../middleware/protectedResource");

router.post("/myposts", protectedRoute, (req, res) => {
    post_model.find({user: req.user._id})
    .populate("user", "_id fullName prodName quantity saleAmount ")
    .then((dbPosts)=> {
        res.status(200).json({posts: dbPosts})
    })
    .catch((error) => {
        console.log(error);
    })
})

router.post("/createPost", protectedRoute, (req, res) => {
    const { prodName, quantity, saleAmount } = req.body;
    //check if any is empty or not
    if (!prodName || !quantity || !saleAmount) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" })
    }
    req.user.password = undefined;
    const postObj = new post_model({ prodName: prodName, quantity: quantity, saleAmount: saleAmount, user: req.user });
    postObj.save()
        .then((newPost) => {
            res.status(201).json({ post: newPost })

        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router;