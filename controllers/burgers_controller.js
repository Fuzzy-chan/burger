var express = require('express');
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burger/create", function (req, res) {
  burger.insertOne(req.body.newBurger, function () {
    res.redirect('/');
  });
});

router.post("/burger/eat/:id", function (req, res) {
  burger.updateOne(req.params.id, function () {
    res.redirect('/');
  });
});

module.exports = router;