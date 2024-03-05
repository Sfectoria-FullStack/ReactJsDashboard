const { Product } = require("../models/models");

// get all
const selectAllProducts = async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
// post a product
const createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
  }
};
// get one product
const getOne = async (req, res) => {
 try {
    const result = await Product.findOne({
        id : +req.params.id
    })
   result?res.send(result):res.status(400).send("id not found")
 } catch (error) {
    console.log(error);
 }
};

// delete a product

const removeProduct = async(req, res) => {
 try {
  const result = await Product.deleteOne({
    id : +req.params.id
  })
    res.status(202).send(result);
 } catch (error) {
  console.log(error)
 }

};

module.exports = { removeProduct, getOne, createProduct, selectAllProducts };
