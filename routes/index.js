// this is an entry point for all the further routes/urls

//each time we are writing this, we are not importing express again and assigning it to a var,
//instaed its imported once in whole application only(../index.js) the instance of that express is created here.
const express = require("express");

//routers are used to group and organize routes and middleware for your web application
const router = express.Router();


console.log("Checking if routes/index.js is loaded or not");

const homeController = require("../controllers/home_controller");
router.get("/", homeController.home);


router.use('/users', require('./users'));
module.exports = router; //making it available to be used by other files(../index.js).
