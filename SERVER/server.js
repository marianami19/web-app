// CREATE TABLE Customer (
//     cust_id int,
//     cust_name varchar(255),
//     email varchar(255),
//     pwd varchar(255),
//     PRIMARY KEY (cust_id)
// );

// CREATE TABLE Sales (
//     sales_id int,
//     cust_id int,
//     prod_name varchar(255),
//     qty varchar(255),
//     sale_amt varchar(255),
//     PRIMARY KEY (sales_id),
//     FOREIGN KEY (cust_id) REFERENCES Customer(cust_id)
// );


const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose")
const { MONGODB_URL } = require('./config')

mongoose.connect(MONGODB_URL)

mongoose.connection.on('connected', () => {
    console.log("DB Connected")
})

mongoose.connection.on('error', (error) => {
    console.log("Error while connecting to DB")

})

require('./models/user_model')
require('./models/post_model')
app.use(cors());

app.listen(PORT, () => {
    console.log("Server Started")
})