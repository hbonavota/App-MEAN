//routes for the products
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//api/products
router.post('/', productController.createProduct)

module.exports = router;