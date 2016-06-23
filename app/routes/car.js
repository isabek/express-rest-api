var express = require("express");
var jwt = require("express-jwt");
var car = require("../actions/car");

var router = express.Router();

router.post('/', jwt({secret: process.env.SECRET_KEY}), car.create);

module.exports = router;