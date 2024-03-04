const connection = require("./index")
let users=[{
    "fullName":"Ahmed"
},
{
    "fullName":"Eya"
},
{
    "fullName":"Nassim"
},
{
    "fullName":"Farouk"
}
]


const createuser=()=>{
    for(let element of users){
    let sql ="insert into users set ?"
    connection.query(sql,element,(err,res)=>{
        if (err) console.log(err)
        else console.log("seeded");
    })
}
}
createuser() 

