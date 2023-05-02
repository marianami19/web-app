const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const user_model = mongoose.model('UserModel');
const { JWT_SECRET } = require('../config')

router.post("/register", (res, req) => {

    const { fullName, email, password } = req.body;
    //check if any is empty or not
    if (!fullName || !email || !password) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" })
    }

    user_model.findOne({ email: email })
        .then(
            (userindb) => {
                if (userindb) {
                    res.status(500).json({ error: "User already registered!" })
                }
                bcryptjs.hash(password, 16)
                    .then((hashedPassword) => {
                        const user = new user_model({ fullName, email, password: hashedPassword });
                        user.save()
                            .then((newUser) => {
                                res.status(201).json({ result: "User successfully registered!" });
                            })
                            .catch((err) => {
                                console.log(err);
                            })

                    })
            }
        )
        .catch((error) => {
            console.log(error)
        })

})

router.post("/login", (res, req) => {

    const { email, password } = req.body;
    //check if any is empty or not
    if (!email || !password) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" })
    }

    user_model.findOne({ email: email })
        .then(
            (userindb) => {
                if (!userindb) {
                    res.status(401).json({ error: "Invalid Credentials!" })
                }
                bcryptjs.compare(password, userindb.password)
                    .then((didMatch) => {
                        if(didMatch) {
                            const jwtToken = jwt.sign({_id: userindb._id}, JWT_SECRET)
                            const userInfo = { "email": userindb.email, "name": userindb.fullName}
                            res.status(200).json({ result: {token: jwtToken, user: userInfo}});
                        } else {
                            res.status(401).json({ error: "Invalid Credentials!" })
                        }
                    })
            }
        )
        .catch((error) => {
            console.log(error)
        })

})

module.exports = router;