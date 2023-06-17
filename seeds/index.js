const mongoose = require("mongoose");
const Data = require("./MOCK_DATA.js");
const ProductModel = require("../Models/Product");
mongoose.set("strictQuery", false);

const URL =
  "mongodb://localhost:27017/FullStackProject";

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected");
  } catch (error) {
    console.log("error", error);
  }
};
connectDB();

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await ProductModel.deleteMany({});
  mongoose.set("strictQuery", true);

  for (let i = 0; i < 100; i++) {
    const product = new ProductModel({
      Product_Name: `${Data[i].product_name}`,
      price: `${Data[i].price}`,
      image_url: `${Data[i].image_url}`,
      product_description: `${Data[i].product_description}`,
      product_category: `${Data[i].product_category}`,
      product_brand: `${Data[i].product_brand}`,
      product_rating: `${Data[i].product_rating}`,
      product_material: `${Data[i].product_material}`,
      product_weight: `${Data[i].product_weight}`,
      product_dimensions: `${Data[i].product_dimensions}`,
      product_color: `${Data[i].product_color}`,
    });
    await product.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
