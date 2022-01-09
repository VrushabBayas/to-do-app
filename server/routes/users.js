const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res
    .status(200)
    .send({ name: "Test admin", role: "admin", fullName: "Test admin user" });
});

module.exports = router;
