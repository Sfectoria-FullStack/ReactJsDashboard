let products = require("../data.json")


// get all
const selectAllProducts = (req,res)=>{
    res.status(200).send(products)
    }
// post a product 
const createProduct = (req,res)=> {
    products.push(req.body)
    res.status(201).send(products)
}

// get one product 
const getOne = (req,res)=>{ console.log(req);
    const result=(products.find((elem)=>elem.id===+req.params.id))
res.status(200).send(result)
}

// delete a product 

const removeProduct = (req,res)=>{ 
    const result=products.filter((elem)=>elem.id!==+req.params.id)
    products=result
    res.status(202).send(products)
}


module.exports = {removeProduct,getOne,createProduct,selectAllProducts}