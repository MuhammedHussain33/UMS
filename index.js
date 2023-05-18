const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()

DB = process.env.DBURL

mongoose.connect(DB);

const connection = mongoose.connection;
connection.once("open",()=>{console.log("Connection is Successful");})


app.use(express.static('public'));

app.set('view engine','ejs');


app.use(express.json())
app.use(express.urlencoded({extended: true}))


//for user routes
const userRoute = require("./routes/userRoute");
app.use('/', userRoute);

//for admin routes
const adminRoute = require("./routes/adminRoute");
app.use('/admin', adminRoute);

app.listen(3000,function(){
    console.log("Server is running...");
})