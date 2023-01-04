const express = require("express");
const Joi = require("joi");
const workerRouter = express();
const Worker = require("./garbege/constractorWorkers");

const worker1 = new Worker(1, "menachem", 29);
const worker2 = new Worker(2, "yarden", 30);

const allWorkers = [worker1, worker2];

function workerVlidation(worker) {
  const schema = {
    name: Joi.string().min(2),
    hourlyRate: Joi.number().min(29),
  };
  return Joi.validate(worker, schema);
}
//!get all costumer
workerRouter.get("/", (req, res) => {
  res.send(allWorkers);
});

//!get costumer by id
workerRouter.get("/:id", (req, res) => {
  const worker = allWorkers.find((obj) => obj.id === parseInt(req.params.id));
  if (!worker) {
    res.status(403).send("no worker found");
    return;
  }
  res.send(worker);
});
//!add new worker
workerRouter.post("/", (req, res) => {
  const resulte = workerVlidation(req.body);
  if (resulte.error) {
    res.status(404).send(resulte.error.details[0].message);
  }
  allWorkers.push(
    new Worker(allWorkers.length, req.body.name, req.body.hourlyRate)
  );
  res.send(allWorkers);
});
//!delete worker by id
workerRouter.delete("/:id", (req, res) => {
  const worker = allWorkers.find((obj) => obj.id === parseInt(req.params.id));
  if (!worker) {
    res.status(403).send("no worker found");
    return;
  }
  const index = allWorkers.findIndex(
    (obj) => obj.id === parseInt(req.params.id)
  );
  allWorkers.splice(index, 1);
  res.send(allWorkers);
});
module.exports = workerRouter;
