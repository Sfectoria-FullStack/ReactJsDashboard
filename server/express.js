const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const productRouter = require("./router/products.router");
const swaggerJsdoc = require("swagger-jsdoc");
require("./models/index");

const app = express();
app.use(express.json());
app.use("/products", productRouter);
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Sfectoria Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "Sfectoria",
        url: "https://www.sfectoria.com",
        email: "contact@sfectoria.com",
      },
    }
  },
  apis: ["./router/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(4000, () => {
  console.log("your server is listening to http://127.0.0.1:4000");
});
