const { Product } = require("./models");
const products = require("../data.json");

const insertProduct = async () => {
  try {
     await Product.create(products)
    console.log("seeded");
  } catch (error) {
    console.log(error);
  }
};



insertProduct()