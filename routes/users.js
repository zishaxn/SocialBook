const express = require('express');

const router = express.Router();

const usersController = require("../controllers/users_controller");

console.log('Users controller');

router.get("/", usersController.user);

module.exports = router;