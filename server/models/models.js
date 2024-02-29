const mongoose = require("mongoose")
const db = require("./index")

const productSchema = new mongoose.Schema({
    id : Number, 
    productName : String, 
    imageURL : String, 
    price : Number, 
    shortDescription:String, 
    longDescription:String
})

const Product = new mongoose.model("products",productSchema)

module.exports = {Product}