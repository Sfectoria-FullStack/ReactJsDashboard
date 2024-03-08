const express = require("express");
const { selectAllProducts, createProduct, getOne, removeProduct } = require("../controller/product.controller");
const productRouter=express.Router()


/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of all products.
 *     description: Retrieve a list of products.
 *     tags: 
 *        - products
 *     responses:
 *       200:
 *         description: A list of products.
 *         
 */
productRouter.get("/",selectAllProducts) 
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a  user.
 *     tags: 
 *        - products
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The product ID.
 *                       example: 1
 *                     productName:
 *                       type: string
 *                       description: The product name.
 *                       example: iphone14
 *                     imageURL:
 *                       type: string
 *                       description: The product image.
 *                       example: www.sfectoria.com/react.jpg
 *                     price:
 *                       type: integer
 *                       description: The product's price.
 *                       example: 130
 *                     shortDescription:String:
 *                       type: string
 *                       description: The product image.
 *                       example: www.sfectoria.com/react.jpg
 *                     longDescription:String:
 *                       type: string
 *                       description: The product image.
 *                       example: www.sfectoria.com/react.jpg
 * 
*/
productRouter.post ("/",createProduct)
productRouter.get("/one/:id",getOne)
productRouter.delete("/:id",removeProduct)

module.exports=productRouter