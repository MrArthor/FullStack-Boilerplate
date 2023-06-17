const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Product_Name: String,

    price: Number,
    image_url: String,
    product_description: String,
    product_category: String,
    product_brand: String,
    product_rating: Number,
    product_material: String,
    product_weight: Number,
    product_dimensions: String,
    product_color: String,
});

module.exports = mongoose.model("ProductModel", ProductSchema);
