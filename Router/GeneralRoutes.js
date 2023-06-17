const expreess = require("express");
const router = expreess.Router();
const ProductModel = require("../Models/Product");
const { isLoggedIn } = require("../Middleware");
const multer = require("multer");


router.get("/", (req, res) => {
    res.render("index");
});

router.get("/Product", async (req, res) => {
  const Products = await ProductModel.find({});
  res.render("Product/Product", { Products });
});


module.exports = router;