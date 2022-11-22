var express = require("express");
var router = express.Router();

const ProductController = require("../modules/Product/product.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/product", ProductController);

module.exports = router;
