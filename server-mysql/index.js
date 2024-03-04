const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const productRouter = require("./router/products.router");


app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use('/products',productRouter)

app.listen(PORT, () => {
  console.log("server listing to http://localhost: " + PORT);
});
