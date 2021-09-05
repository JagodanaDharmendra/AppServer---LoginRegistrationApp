var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("User API");
});

router.get("/exist", async function (req, res, next) {
  //a
});

module.exports = router;
