var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
router.post("/", (req, res, next) => {
  console.log("data is:", req.body);
  res.render("result", { title: "post", data: req.body });
});

module.exports = router;
