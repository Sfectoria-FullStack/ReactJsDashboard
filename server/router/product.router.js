const express = require("express")
const { selectAllProducts, createProduct, getOne, removeProduct } = require("../controller/product.controller")
const productRouter = express.Router()


productRouter.get("/",selectAllProducts)
productRouter.post("/",createProduct)
productRouter.get("/one/:id",getOne)
productRouter.delete("/:id",removeProduct)


module.exports = productRouter