const connection = require ("../models/index.js")

const selectAllusers=(req,res)=>{
    let sql ="select * from users"
    connection.query(sql,(err,result)=>{
        if (err) console.log(err)
        else res.send(result)
    })
}
 
module.exports={selectAllusers}