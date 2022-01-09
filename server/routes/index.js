/* eslint-disable func-names */
const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    name: "Default route",
    role: "admin",
    fullName: "Test admin user",
  });
});

module.exports = router;
