const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/pfe") // db uri 
.then(()=>console.log("db is connected"))
.catch((err)=>console.error(err))


const db = mongoose.connection

module.exports = db 