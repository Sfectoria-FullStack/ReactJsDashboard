const express = require("express");
const productRouter = require("./router/product.router");

const app = express();
app.use(express.json());
app.use("/products",productRouter)
app.listen(4000, () => {
  console.log("your server is listening to http://127.0.0.1:4000");
});
