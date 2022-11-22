const express = require("express");
const router = express.Router();
const ProductService = require("./product.service");

router.get("/", ProductService.getProduct);
router.get("/:id", ProductService.getProductByID);
router.post("/", ProductService.saveProduct);
router.delete("/:id", ProductService.deleteProduct);
router.patch("/:id", ProductService.updateProduct);

module.exports = router;
