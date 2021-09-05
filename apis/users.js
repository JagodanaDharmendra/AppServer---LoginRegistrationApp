var express = require("express");
var router = express.Router();
const { db } = require("../helpers/connection/mongodb");

const COLLECTION_NAME = "users";
/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    console.log(db);
    const result = await db.collection(COLLECTION_NAME).find({}).toArray();
    // res.send("Simple found");
    res.send(result);
  } catch (e) {
    res.send("Error" + e);
  }
});

router.get("/exist", async function (req, res, next) {
  try {
    // console.log(req);
    const result = await db
      .collection(COLLECTION_NAME)
      .find({ email: req.query.email })
      .toArray();

    if (result.length == 1) {
      res.json({
        success: true,
        message: "User Found",
      });
    } else {
      res.json({
        success: false,
        message: "Not found",
      });
    }
  } catch (e) {
    res.json({
      success: false,
      result: "No user found",
    });
  }
});

router.put("/create", async function (req, res, next) {
  try {
    const result = await db.collection(COLLECTION_NAME).insertOne({
      name: req.body.name,
      email: req.body.email,
      pwd: req.body.pwd,
    });
    return res.json({
      success: true,
      message: "User created",
    });
  } catch (e) {
    return res.json({
      success: false,
      message: e.message,
    });
  }
});

module.exports = router;
