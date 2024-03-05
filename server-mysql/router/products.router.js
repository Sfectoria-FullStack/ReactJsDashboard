const { selectAllProduct } = require('../controllers/product.controller')

const productRouter=require('express').Router()

productRouter.get('/',selectAllProduct)

module.exports=productRouter