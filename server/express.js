const express = require("express")
let products = require("./data.json")

const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
res.status(200).send(products)
})

app.post("/",(req,res)=>{
    products.push(req.body)
    res.status(201).send(products)
    
})
app.get("/one/:id" , (req,res)=>{ console.log(req);
    const result=(products.find((elem)=>elem.id===+req.params.id))
res.status(200).send(result)
})
app.delete("/:id",(req,res)=>{ 
    const result=products.filter((elem)=>elem.id!==+req.params.id)
    products=result
    res.status(203).send(products)
})



app.listen(4000,()=>{
    console.log("your server is listening to http://127.0.0.1:4000");
})