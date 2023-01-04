const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");
const customers = require("./customer");
const workers = require("./workers");
const books = require("./book");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
// app.use("/api/customer", customers);
// app.use("/api/workers", workers);
app.use("/api/books", books);
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/library")
  .then(() => console.log("conectet to mongo db"))
  .catch(() => console.log("coldent connect to mongo db"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`activ on ${port}`));
