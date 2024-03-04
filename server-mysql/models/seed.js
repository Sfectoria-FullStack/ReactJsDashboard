const db = require("./index");
const data = require("./data.json");
const users = [{ fullName: "khalil" }, { fullName: "Rawen" }];
const insertUsers = () => {
  for (let elem of users) {
    db.query("insert into users set ?", elem, (err, result) => {
      if (err) console.log(err);
      else console.log("user number " + elem.fullName);
    });
  }
};
const insertProducts = () => {
  for (let elem of data) {
    db.query("insert into products set ?", elem, (err, result) => {
      if (err) console.log(err);
      else console.log("porduct number " + elem.productName);
    });
  }
};
const reactType = [{ label: "like" }, { label: "dislike" }];
const insertReactType = () => {
  for (let elem of reactType) {
    db.query("insert into reactType set ?", elem, (err, result) => {
      if (err) console.log(err);
      else console.log("reactType number " + elem.productName);
    });
  }
};
const reacts = [
  { id_users: 2, id_products: 1, id_reactType: 1 },
  { id_users: 2, id_products: 5, id_reactType: 2 },
];

const insertReact = () => {
  for (let elem of reacts) {
    db.query("insert into react set ?", elem, (err, result) => {
      if (err) console.log(err);
      else console.log("react number " + elem.id_reactType);
    });
  }
};

insertUsers();
insertProducts();
insertReactType();
insertReact();
