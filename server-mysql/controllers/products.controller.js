const db = require("../models/index");

const selectAllProduct = (req, res) => {
  let sql = `select p.*,u.fullName,r.id_reactType,rt.label from products p 
  inner join users u on u.id=p.userId s join react r on r.id_products=p.id
  left join reactType rt on rt.id=r.id_reactType
  `;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      res.status(200).send(result);
    }
  });
};

module.exports = { selectAllProduct };
