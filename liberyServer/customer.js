const express = require("express");
const Joi = require("joi");
const router = express();
const Customer = require("./garbege/constractorCustomer");

//!get all costumer
router.get("/", (req, res) => {
  res.send(costumers);
});
//!get costumer by id
router.get("/:id", (req, res) => {
  const costumer = costumers.find(
    (costumer) => costumer.id === parseInt(req.params.id)
  );
  if (!costumer) {
    res.status(404).send("no costumer found");
    return;
  }
  res.send(costumer);
});

//!add a new costumer
router.post("/", (req, res) => {
  const resulte = customerVlidation(req.body);
  if (resulte.error) {
    res.status(404).send(resulte.error.details[0].message);
    return;
  }
  costumers.push(
    new Customer(costumers.length + 1, req.body.name, req.body.phonenumber)
  );
  res.send(req.body);
});
module.exports = router;

//!delete by id
router.delete("/:id", (req, res) => {
  const costumer = costumers.find(
    (costumer) => costumer.id === parseInt(req.params.id)
  );
  if (!costumer) {
    res.status(404).send("costomer not found");
    return;
  }
  const index = costumers.findIndex(
    (costumer) => costumer.id === parseInt(req.params.id)
  );
  costumers.splice(index, 1);
  res.send(costumers);
});

function customerVlidation(costumer) {
  const schema = {
    name: Joi.string().required(),
    phonenumber: Joi.number().max(10),
  };
  return Joi.validate(costumer, schema);
}
