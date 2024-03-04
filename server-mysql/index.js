const express = require("express");
const app = express();
const PORT = 4000;
require('./models/index')
const cors = require("cors");
const userRouter = require("./router/users.router");
app.use(cors({origin:"*"}))
const productRouter = require("./router/products.router");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use('/products',productRouter)
app.use('/users',userRouter)

app.listen(PORT, () => {
  console.log("server listing to http://localhost: " + PORT);
});
